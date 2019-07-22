const userModel = require('../models/userModel')

module.exports = async (ctx)=>{
	const id = ctx.request.query.id;
	try{
	const deletedUser = await userModel.findByIdAndDelete(id) ;
	//console.log(deletedUser);
	await ctx.render('success',{
		msg: `User ${deletedUser.firstName} successfully deleted!`
	})
	}
	catch(err){
    //console.log(err)
    await ctx.render('errorPage',{
      msg:err._message
    })
  }
}