var Event = require('event');

/*var work = function() {
	var count = 0;

	while(count < 1000000000	) {
		count++;
	}
};*/

/** Create a new thread
*/
var Thread = function(workerObject) {

	//Convert worker object to a string
	var objectString = this.stringifyObject(workerObject);

	//Turn it into an immediately-executing function
	var workerString = this.encloseString(objectString);

	//Make a blob of it
	var blob = new Blob([workerString], {type: 'text/javascript'});

	//Create a worker pointed at the blob
	this.worker = new Worker(window.URL.createObjectURL(blob));

	return this;
};



Thread.prototype = new Event();

Thread.prototype.stringifyObject = function(workerObject) {
	if(typeof workerObject === 'function') {
		return workerObject.toString();
	}
	var workerString = '{\n';
	for(var i in workerObject) {
		workerString += '\t' + i + ': ' + this.stringifyObject(workerObject[i]) + ',\n';
	}
	workerString = workerString.substring(0,workerString.length-2) + '\n';
	workerString += '};';
	return workerString;
};

Thread.prototype.encloseString = function(workerString) {

	return '(' + workerString + ')()';

};

var t = new Thread(work);

var updateTime = function() {
	document.getElementById('timer').innerHTML = new Date().getTime();
}



setInterval(updateTime,100);
work();
//var worker = new Worker('hi.js');


//t.worker.addEventListener('message',onMessage);

function onMessage(e) {
	console.log(e.data);
}