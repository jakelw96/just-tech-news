const withAuth = (req, res, next) => {
    if (!req.session.uder_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;