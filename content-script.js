// this the script that access DOM tree
// it will be injected

console.log("script injected");

let i = 0;
setInterval(()=> {
	console.log(i++);
}, 1000);
