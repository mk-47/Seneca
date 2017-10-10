var seneca = require('seneca')();
var jsonfile = require ('jsonfile');

//var data = require ("./MOCK_DATA.json");

// seneca.add("role:list,cmd:read", function(msg, done) {
   
   
//     jsonfile.readFile ("./MOCK_DATA.json", function (err, obj){
//         respond(null, {Incidents: obj}) 
//      })

// });

seneca.add("role:add,cmd:write", function(msg,done)
{
    var obj = {"incidentId":"SNI654321","description":"service running"}
    jsonfile.writeFile("./MOCK_DATA.json", obj, {flag: 'a'}, function (err) {
    if (err){
        console.error(err);
    }
    else {
        var ans = true;
        done(null, {answer: ans})
    }
})
})

seneca.listen(8085);
