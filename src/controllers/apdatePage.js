const userModel = require('../models/userModel')

module.exports = async (ctx)=>{
	const id = ctx.request.query.id;
	try{
  const userToUpdate = await userModel.findById(id);
  //console.log(updatedUser);
  await ctx.render('updatePage',{
    firstName:userToUpdate.firstName,
    title:userToUpdate.title,
    lastName:userToUpdate.lastName,
    city:userToUpdate.city,
    country:userToUpdate.country,
    fone:userToUpdate.mobileFone,
    category:userToUpdate.category,
    userName:userToUpdate.userName,
    email:userToUpdate.email,
    dailyRate:userToUpdate.dailyRate,
    id:userToUpdate._id
  })
	}
	catch(err){
	//console.log(err)
    await ctx.render('errorPage',{
    msg:err._message
    })
	}
}