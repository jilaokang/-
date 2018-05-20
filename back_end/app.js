const Koa = require("koa")
const app = new Koa()

const Router = require('koa-router')
const router = new Router()

const cors = require('koa-cors')

app.use(cors())
// 注入router.routers
app.use(router.routes())

router
    .get('/',showIndex)
    .post('/', getValue)

async function showIndex(ctx){
    ctx.body="test"
}

async function getValue(ctx){
    ctx.render({dd:dddd})
}

app.listen(3001);