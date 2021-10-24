const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/dashboard')

module.exports = router;
