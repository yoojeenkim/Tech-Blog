const router = require('express').Router();
const { Blog } = require('../../models/Blog');
const withAuth = require('../../utils.auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({ user_id: req.session.user_id });
        res.json(newBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;