var app = require('./app');
var port =3000;


//this line is required to parse the request body
//app.use(express.json())
//configure the server port
app.listen(port, () => {
    console.log('Server runs on port 3000')
})
