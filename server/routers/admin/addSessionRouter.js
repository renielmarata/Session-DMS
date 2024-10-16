const { addSessionController } = require("../../controllers");
const { authRefreshToken, authAccessToken } = require("../../middlewares");
const { express } = require("../../utils/libs");


const addSessionRouter = express.Router();

addSessionRouter.post('/addSession', authAccessToken, authRefreshToken, addSessionController);


module.exports = addSessionRouter;