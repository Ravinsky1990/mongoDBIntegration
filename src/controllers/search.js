const userModel = require('../models/userModel');

module.exports = async (ctx) => {
  const users = await userModel.find({});
  // console.log(users)
  await ctx.render('index', {
    users,
  });
};
