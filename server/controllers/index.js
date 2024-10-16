//auth
const checkAuthController = require("./auth/checkAuthController.js");
const signinAuthController = require("./auth/signinAuthController.js");
const logoutAuthController = require("./auth/logoutAuthController.js");



// admin
const addSessionController = require("./admin/addSessionController.js");





module.exports = {
    // auth
    checkAuthController,
    signinAuthController,
    logoutAuthController,

    // admin
    addSessionController,
}