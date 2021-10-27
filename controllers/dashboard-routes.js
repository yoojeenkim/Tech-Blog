const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true}));

        res.render('dashboard', { blogs });
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/new', withAuth, async (req, res) => {
    res.render('new-blog');
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id);
  
      if (blogData) {
        const blogs = blogData.get({ plain: true });
  
        res.render('edit', { blogs });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });
  
  module.exports = router;