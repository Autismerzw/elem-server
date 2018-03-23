var express = require('express');

var app = express();

var port = 3005;

var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings
//定义模拟接口路由 
var apiRoutes = express.Router()

apiRoutes.get('/seller', function (req, res) {
    res.json({
        erron: 0,
        data: seller
    })
})
apiRoutes.get('/goods', function (req, res) {
    res.json({
        erron: 0,
        data: goods
    })
})
apiRoutes.get('/ratings', function (req, res) {
    res.json({
        erron: 0,
        data: ratings
    })
})

app.use('/api', apiRoutes)

app.listen(3005, function () {
    console.log('Example app listening on port 3000!');
});