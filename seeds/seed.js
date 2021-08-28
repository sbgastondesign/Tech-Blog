const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userDataSeed = require('./userData.json');
const postDataSeed = require('./postData.json');
const commentDataSeed = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userDataSeed, {
    individualHooks: true,
    returning: true,
  });

  for (const posts of postDataSeed) {
    await Post.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentDataSeed) {
    await Comment.create({
      ...comments,
      comment_data: comments[Math.floor(Math.random() * comments.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
