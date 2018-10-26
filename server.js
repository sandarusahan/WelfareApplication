const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const oracledb = require('oracledb');
const db = require('./db');

const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist/WelfareApplication')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/tables', function(req, res) {
    let con = db.connectDB().then(con => {
        console.log("Connected.....");
        
        con.execute(
            `select PERSON_ID from WEL_PARTICIPATION`,
            function(err, result) {
                if (err) {
                    console.error(err.message);
                    db.releaseDB(con);
                    return;
                }
                console.log(result.rows);
                res.json(result.rows)
                db.releaseDB(con);
            }
        );
            
        // res.end("End here");
    });
});

app.get('/users', function(req, res) {
    let con = db.connectDB().then(con => {
        console.log("Connected.....");
        
        con.execute(
            `select PERSON_ID from WEL_PARTICIPATION`,
            function(err, result) {
                if (err) {
                    console.error(err.message);
                    db.releaseDB(con);
                    return;
                }
                console.log(result.rows);
                res.json(result.rows)
                db.releaseDB(con);
            }
        );
            
        // res.end("End here");
    });
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/WelfareApplication/index.html'));
});

app.listen(port, function(){
    console.log("Server running on localhost:"+ port);
}); 