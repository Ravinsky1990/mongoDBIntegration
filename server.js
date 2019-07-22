const Koa = require('koa');
const static = require('koa-static');
const KoaRouter = require('koa-router');
const views = require('koa-views');
const path = require('path');
const nunjucks = require('nunjucks');
var bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();
app.use(bodyParser());

//DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yuriy_90:121790yura@clusterdb2internship-8gkox.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

//set static
app.use(static(__dirname + '/public'));

//set views middelwere
app.use(views(path.join(__dirname, './src/templates'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}));

nunjucks.configure(path.join(__dirname, './src/templates'), {
  autoescape: true,
});

//set routes
router.use(require('./src/routes').routes());
app.use(router.routes());

//set port
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
  console.log('Server is running!!!');
});