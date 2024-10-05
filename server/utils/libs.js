const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');


module.exports = {
    express,
    mongoose,
    dotenv,
    helmet,
    cookieParser,
    cors,
    jwt,
}