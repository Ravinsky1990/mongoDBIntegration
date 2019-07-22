const userModel = require('../models/userModel');

module.exports = async (ctx) => {
  const { body } = ctx.request;
  const { id } = ctx.request.body;
  delete body.id;
  const objToUpdate = {};
  for (const key in body) {
    if (!body[key] == '') {
      objToUpdate[key] = body[key];
    }
  }
  // console.log(objToUpdate);
  const updatedUser = await userModel.findByIdAndUpdate(id, objToUpdate);
  // console.log(updatedUser);
  await ctx.render('success', {
    msg: `User ${updatedUser.firstName} successfully updated!`,
  });
};
