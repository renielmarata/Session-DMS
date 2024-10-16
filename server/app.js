const { express, mongoose, dotenv, cookieParser, helmet, cors } = require("./utils/libs.js");
const { dbConnect } = require("./config/index.js");
const { checkAuthRouter, signinAuthRouter, logoutAuthRouter, addSessionRouter } = require("./routers/index.js");
const { GridFSBucket } = require("mongodb");
const Busboy = require('busboy');



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
        app.use(logoutAuthRouter);

        // admin
        app.use(addSessionRouter);


        app.post('/adminDashboardData', (req, res) => {
            console.log("admin data --------------------");
        })



        

        app.listen(process.env.serverPort);


    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


startServer();