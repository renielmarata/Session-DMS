const { signinAuthController } = require("../../controllers");
const { authAccessToken, authRefreshToken } = require("../../middlewares");
const { express } = require("../../utils/libs");


const signinAuthRouter = express.Router();

signinAuthRouter.post("/signin", authAccessToken, authRefreshToken, signinAuthController);


module.exports = signinAuthRouter;