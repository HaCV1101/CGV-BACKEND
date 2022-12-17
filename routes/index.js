
const loginRouter = require('./auth')



function route(app) {
    app.use('/auth', loginRouter);
}


module.exports = route;