// auth
const checkAuthRouter = require("./auth/checkAuthRouter");
const signinAuthRouter = require("./auth/signinAuthRouter.js");
const logoutAuthRouter = require("./auth/logoutAuthRouter.js");


module.exports = {
    checkAuthRouter,
    signinAuthRouter,
    logoutAuthRouter,
}