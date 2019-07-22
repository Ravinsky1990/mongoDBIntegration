const Router = require('koa-router');
const sighUp = require('./controllers/sighUp');
const create = require('./controllers/addUser');
const profile = require('./controllers/profile');
const accountInfo = require('./controllers/accountInfo');
const search = require('./controllers/search');
const deletedUser = require('./controllers/deletedUser');
const updatePage = require('./controllers/apdatePage');
const updateUser = require('./controllers/updateUser')

const router = new Router();

// router.param("id", (val, ctx, next)=>{
// 	ctx.userId = val;
// 	return next()
// })

//Resource interpreted as Stylesheet but transferred
//with MIME type text/html: "http://localhost:3000/profile/main.css".

router.get('/', sighUp);
router.post('/success', create);
router.get('/profile', profile);
router.get('/accountInfo', accountInfo);
router.get('/search', search);
router.get('/deletedUser', deletedUser);
router.get('/updatePage', updatePage);
router.post('/updateUser', updateUser);


module.exports = router