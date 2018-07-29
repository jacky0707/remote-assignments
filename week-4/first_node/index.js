var express    = require('express');
var app        = express();

var router = express.Router();
router.get('/', function(req, res) {
    res.send('Hello, My Server!' );   
});

app.use(router);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('listening on ' + port);