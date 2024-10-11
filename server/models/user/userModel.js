const { mongoose } = require("../../utils/libs.js");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        match: /^[a-zA-Z]+$/,
    },
    password: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9]+$/,
    },
    role: {
        type: String,
        required: true,
        enum: ['councilor', 'admin'],
        default: 'councilor',
    }
});


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;