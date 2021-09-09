const { Post } = require('../models');

const postData = [
  {
    title: "Random regex",
    post_text: "Just some random post about regex.",
    user_id: "1"
  },
  {
    title: "The Ultimate Tech Quiz",
    post_text: "A web app that will test your coding abilities.",
    user_id: "2"
  },
  {
    title: "Interview Time",
    post_text: "What it takes to get the job.",
    user_id: "3"
  },
  {
    title: "Heroku",
    post_text: "How many repos does it take to deploy correctly? All the repos there ever was and ever will be.",
    user_id: "2"
  },
  {
    title: "Code and Caffeine",
    post_text: "What gets you through the day and night and day again.",
    user_id: "1"
  },
  {
    title: "Swan Song",
    post_text: "The best code there ever was until it wasn't.",
    user_id: "1"
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;