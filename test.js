
const fs = require('fs');
console.log("hello from node.js");
try
{
	fs.mkdirSync('data');
}
catch (e)
{

}
function pad(s, len)
{
	s = `${s}`;
	while (s.length < len)
		s = '0' + s;
	return s;
}
let now = new Date();
let filename = `${pad(now.getFullYear(), 4)}-${pad(now.getMonth() + 1, 2)}-${pad(now.getDate(), 2)}.txt`;

fs.appendFileSync('data/' + filename, `now is ${now.toString()}\r\n`, { encoding: 'utf-8' });

