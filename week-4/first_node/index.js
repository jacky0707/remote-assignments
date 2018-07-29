var express    = require('express');
var app        = express();

var router = express.Router();
router.get('/', function(req, res) {
    res.send('Hello, My Server!' );   
});
router.get('/getData', function(req, res) {
    if(!req.query.number){
        res.send('Wrong Parameters');   
    }else{
        target = parseInt(req.query.number);
        ans = (target+1)*target/2;
        res.send('<p>'+ans+'</p>');
    }
});


app.use(router);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('listening on ' + port);