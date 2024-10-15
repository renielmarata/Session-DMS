const { logoutAuthController } = require("../../controllers");
const { express } = require("../../utils/libs");

const logoutAuthRouter = express.Router();

logoutAuthRouter.post('/logout', logoutAuthController);


module.exports = logoutAuthRouter;