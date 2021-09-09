const { User } = require('../models');

const userData = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password12345"
  },
  {
    username: "Larry",
    email: "john20@aol.com",
    password: "password12345"
  },
  {
    username: "Stephanie",
    email: "stefunny0@yahoo.com",
    password: "password12345"
  },
  {
    username: "Bernadette",
    email: "dettey@gmail.com",
    password: "password12345"
  },

];
const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;