const userModel = require('../models/userModel')

module.exports = async (ctx)=>{
	const id = ctx.request.query.id;
	//find by id
	try{
	const curUser = await userModel.findById(id);
	//console.log(curUser);
	await ctx.render('accountInfo',{
		category:curUser.category,
		userName:curUser.userName,
		email:curUser.email,
		id:curUser._id
	})
	}catch(err){
    //console.log(err)
    await ctx.render('errorPage',{
      msg:err._message
    })
  }
}