const logoutAuthController = async (req, res) => {
    try {
        res.clearCookie(
            'TolGovAccess',
        );

        res.clearCookie(
            'TolGovRefresh',
        );

        return res.status(204).json({
            message: 'successfully remote token'
        })
        
    } catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = logoutAuthController;