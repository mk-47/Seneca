var seneca = require('seneca')();
var jsonfile = require ('jsonfile');
var fs = require('fs');

var data = require ("./MOCK_DATA.json")

// seneca.add("role:list,cmd:read", function(msg, done) {
   
   
//     jsonfile.readFile ('./MOCK_DATA.json', function (err, obj){
//         done(null, {Incidents: obj});
//      })

// })

// seneca.add("role:add,cmd:write", function(msg,done)
// {

//     var obj = {"incidentId":"SNI654321","description":"service running"};
//     jsonfile.writeFile("./MOCK_DATA.json", obj, {flag: 'a'}, function (err) {
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

// seneca.add("role:add,cmd:write", function(msg,done)
// {
// var obj = JSON.parse(fs.readFileSync('./MOCK_DATA.json', 'utf8'));
// obj.push({"teamId":"4","status":"pending"});
// //obj = JSON.stringify(obj);
// jsonfile.writeFile("./MOCK_DATA.json", obj, function (err) {
//     if (err){
//         console.error(err);
//     }
//     else {
//         var ans = true;
//         done(null, {answer: ans})
//     }
// })
// })

seneca.add("role:incident,cmd:get", function(msg, done) {
    
        var user = data.filter(function(usr) { return usr.id == msg.id});
        var error =null;
        if (user.length === 0 ) {
            error = Error ("user not found");
    
        }
        else{
            user = user[0]
        }
        
        done(error, {"user" : user})
    })
seneca.listen(8085);
