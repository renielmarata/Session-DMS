const { express, dotenv, cookieParser, helmet, cors } = require("./utils/libs.js");
const { dbConnect } = require("./config/index.js");
const { authAccessToken } = require("./middlewares/index.js");
const { checkAuthRouter } = require("./routers/index.js");



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


        

        app.listen(process.env.serverPort);


    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


startServer();