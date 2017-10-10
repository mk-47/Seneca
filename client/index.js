var seneca = require ("seneca")();


seneca.client({host:"127.0.0.1", port:8085}).act({"role":"list","cmd":"read"}, function (err,response) {
	if (err) return console.log (err.msg);
	console.log(response)
})


// seneca.client({host:"127.0.0.1", port:8085}).act({"role":"add","cmd":"write"}, function (err,response) {
// 	if (err) return console.log (err.msg);
// 	console.log (response);
// })


seneca.client({host:"127.0.0.1", port:8085}).act({"role":"incident","cmd":"get","id":1}, function (err,response) {
	if (err) return console.log (err.msg);
	console.log (response);
})