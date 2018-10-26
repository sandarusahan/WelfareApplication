const express = require('express');
const router = express.Router();

const oracledb = require('oracledb');
const db = require('../../db'); 

router.get('/', function(req, res){
    res.send('api works');
});

router.post('/login', function(req, res) {
    console.log(req.body.userid.toUpperCase());
    let con = db.connectDB().then(con => {
        console.log("Connected.....");
        
        con.execute(
            `select person_id from WEL_PARTICIPATION where PERSON_ID = '${req.body.userid.toUpperCase()}'`,
            function(err, result) {
                if (err) {
                    console.error(err.message);
                    db.releaseDB(con);
                    return;
                }
                console.log(result.rows);
                res.json({'result':result.rows})
                db.releaseDB(con);
            }
        );
            
        // res.end("End here");
    });
});

module.exports = router;