
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

Comment.belongsTo(Post, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  Post,
  Comment,
  User,
};