const userModel = require('../models/userModel')

module.exports = async (ctx) => {
  //extract req body
  const userData = ctx.request.body;

  //write to db
  let user = new userModel(userData);
  try{
    user = await user.save();
    await ctx.render('success',{
    id:user._id,
    msg:`${user.firstName}, you are successful!`,
    name:user.firstName
  });
  console.log(user._id)
  }catch(err){
    //console.log(err)
    await ctx.render('errorPage',{
      msg:err._message
    })
  }
}