const router = require('express').Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils.auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Blog.create({ user_id: req.session.user_id });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;