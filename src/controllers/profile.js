const userModel = require('../models/userModel');

module.exports = async (ctx) => {
  const { id } = ctx.request.query;
  // find by id
  const curUser = await userModel.findById(id);
  console.log(curUser);
  await ctx.render('profile', {
    firstName: curUser.firstName,
    title: curUser.title,
    lastName: curUser.lastName,
    city: curUser.city,
    country: curUser.country,
    fone: curUser.mobileFone,
    id: curUser._id,
  });
};
