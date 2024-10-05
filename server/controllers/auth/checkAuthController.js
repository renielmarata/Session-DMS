const checkAuthController = async (req, res) => {
    try {
        // get and verify accessToken
        // add token in header
        // send request

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}


module.exports = checkAuthController;                              