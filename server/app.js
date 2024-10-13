const { express, dotenv, cookieParser, helmet, cors } = require("./utils/libs.js");
const { dbConnect } = require("./config/index.js");
const { authAccessToken } = require("./middlewares/index.js");
const { checkAuthRouter, signinAuthRouter } = require("./routers/index.js");



const startServer = async () => {
    try {

        // database
        await dbConnect();


        const app = express();


        // middlewares
        app.use(express.json());
        app.use(cookieParser());
        app.use(helmet());
        app.use(cors({
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST'],
            credentials: true,
        }));


        app.use(checkAuthRouter);
        app.use(signinAuthRouter);

        app.post("/logout", (req, res) => {
            console.log("logout request received");
            res.clearCookie(
                'TolGovAccess',
            );

            res.clearCookie(
                'TolGovRefresh',
            );

            return res.status(204).json({
                message: 'successfully remote token'
            })
        })


        

        app.listen(process.env.serverPort);


    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


startServer();