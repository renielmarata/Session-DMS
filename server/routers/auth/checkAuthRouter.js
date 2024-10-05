const { checkAuthController } = require("../../controllers");
const { express } = require("../../utils/libs");

const checkAuthRouter = express.Router();

checkAuthRouter.post("/checkAuth", checkAuthController);

module.exports = checkAuthRouter;