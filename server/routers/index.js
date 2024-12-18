// auth
const checkAuthRouter = require("./auth/checkAuthRouter");
const signinAuthRouter = require("./auth/signinAuthRouter.js");
const logoutAuthRouter = require("./auth/logoutAuthRouter.js");


// admin
const addSessionRouter = require("./admin/addSessionRouter.js");
const dashboardRouter = require("./admin/dashboardRouter.js");

module.exports = {
    // auth
    checkAuthRouter,
    signinAuthRouter,
    logoutAuthRouter,

    // admin
    addSessionRouter,
    dashboardRouter,
}