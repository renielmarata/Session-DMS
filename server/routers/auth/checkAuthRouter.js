const { checkAuthController } = require("../../controllers");
const { authAccessToken, authRefreshToken } = require("../../middlewares");
const { express } = require("../../utils/libs");

const checkAuthRouter = express.Router();

checkAuthRouter.post("/checkAuth", authAccessToken, authRefreshToken, checkAuthController);

module.exports = checkAuthRouter;