const { dashboardController } = require("../../controllers");
const { express } = require("../../utils/libs");

const dashboardRouter = express.Router();

dashboardRouter.post('/admindashboard', dashboardController);


module.exports = dashboardRouter;