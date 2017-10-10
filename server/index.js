var seneca = require('seneca')();
var jsonfile = require ('jsonfile');
var fs = require('fs');

var data = require ("./incidents.json")

// seneca.add("role:list,cmd:read", function(msg, done) {
   
   
//     jsonfile.readFile ('./incidents.json', function (err, obj){
//         done(null, {Incidents: obj});
//      })

// })

// seneca.add("role:add,cmd:write", function(msg,done)
// {

//     var obj = {"incidentId":"SNI654321","description":"service running"};
//     jsonfile.writeFile("./incidents.json", obj, {flag: 'a'}, function (err) {
//     if (err){
//         console.error(err);
//     }
//     else {
//         var ans = true;
//         done(null, {answer: ans})
//     }
// })
// })

//append at the end

seneca.add("role:add,cmd:write", function(msg,done)
{
var obj = JSON.parse(fs.readFileSync('./incidents.json', 'utf8'));
obj.push({"incidentId":"SNI12876", "description":"downgraded service","status":"In progress"});
//obj = JSON.stringify(obj);
jsonfile.writeFile("./incidents.json", obj, function (err) {
    if (err){
        console.error(err);
    }
    else {
        var ans = true;
        done(null, {answer: ans})
    }
})
})

seneca.add("role:incident,cmd:get", function(msg, done) {
    
        var inc = data.filter(function(insi) { return insi.incidentId == msg.id});
        var error =null;
        if (inc.length === 0 ) {
            error = Error ("incident not found");
    
        }
        else{
            inc = inc[0]
        }
        
        done(error, {"incident" : inc})
    })
seneca.listen(8085);
