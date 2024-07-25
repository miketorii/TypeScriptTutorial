import fs = require('fs');

console.log('-------promise------');

function readFileAsync(filename: string) : Promise<any>{
    return new Promise( (resolve, reject) => {
            fs.readFile(filename,
                        (err, result) => {
                            if(err) reject(err);
                            else resolve(result);
                        } )
        }
    );
}

var filename = "mike.txt";
//var filename = "no.txt";

readFileAsync(filename)
    .then(function(val){ console.log(val); })
    .catch(function(err){
        console.log("file read err", err.message);
    })