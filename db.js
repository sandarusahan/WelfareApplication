const oracledb = require('oracledb');
const config = require('./config');


// async function getConnection() {
//     await oracledb.getConnection(
//         {
//           user          : config.db.user,
//           password      : config.db.password,
//           connectString : config.db.connectionString
//         }
        // ,
        // function(err, connection) {
        //   if (err) {
        //     console.error(err.message);
        //     return;
        //   }

        //   return connection;
        // }
//     );
// }


function promiseConnection() {
    return new Promise(function(resolve, reject) {
        oracledb.getConnection({
              user          : config.db.user,
              password      : config.db.password,
              connectString : config.db.connectionString
        }, function(err, connection){
            if (err) {
                console.error(err.message);
                reject(err.message);
            }
            resolve(connection);
        })
    });
}

function doRelease(connection) {
    connection.close(
      function(err) {
        if (err)
          console.error(err.message);
      });
}

// let con = promiseConnection().then(connection => {
//     console.log("Connected......");
//     console.log(connection);
// });


module.exports = {
    connectDB: promiseConnection,
    releaseDB: doRelease
};