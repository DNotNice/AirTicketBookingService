const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server-config')
const app = express();
const db = require('./models/index')
const apiRoutes = require('./routes/index')
const setUpAndStartServer = () =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended : true
    })) 
    app.use ('/bookingservice/api' , apiRoutes )
    
    app.listen(PORT , () =>{
        console.log(`server started on ${PORT}`);
        if(process.env.DB_SYNC) db.sequelize.sync({alter:true});
    })
}
setUpAndStartServer();