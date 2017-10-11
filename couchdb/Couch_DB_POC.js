var couchbase = require ('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('test');
var Promise = require ('bluebird');
Promise.promisifyAll(couchbase);

var count =0;

let promise = new Promise((resolve,reject) => {
    bucket.get ('incident.json', function (err, result){
        if (err) {
             reject(err);
        }
        resolve(result);
    })
});

promise.then((result) => {
    var array =result.value.array;
    for (var i=0; i<array.length;i++){
        if (array[i].status === "In progress"){
            count++;
        }
            
    }
    var obj = {"Open Tickets":count}
    console.log (obj);  
}).catch((err) => {
    console.log(err);
})

