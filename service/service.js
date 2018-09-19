const Koa = require('koa');
const Router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();


Router.get('/user1', async (ctx, next) => {
  ctx.type = 'json';
  ctx.body = {
    name: 'ethan',
    age: 18
  }
  await next();
})
Router.post('/name', async (ctx, next) => {
  ctx.type = 'json';
  ctx.body = {
    name: 'Aimi',
    age: 15
  }
})

app.use(bodyParser())
app.use(Router.routes());

app.listen(1990, () => {
  console.log('服务启动');
});
