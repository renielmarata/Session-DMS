const { dashboardController } = require("../../controllers");
const { express } = require("../../utils/libs");

const dashboardRouter = express.Router();

dashboardRouter.get('/adminDashboardData', dashboardController);


module.exports = dashboardRouter;