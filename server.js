let express = require('express');

let app = express();

const path = require('path');

let bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public', 'dist')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.get('*', function (req,res){
  res.sendFile(path.resolve('public/dist/index.html'));
})

app.listen(9000, () => console.log("servier is listening on 9000"))

//INitial statements ==========================
