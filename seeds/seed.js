const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogPosts = require('./blogPosts.json');
const commentPosts = require('./comments.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogPosts) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentPosts) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();