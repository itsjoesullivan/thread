var Thread = require('thread');

var routine = function() {

	onmessage = function(e) {
		postMessage(e.data);
	};

	thread.send('ready');

};

var thread = new Thread(routine);

thread.on('ready', function() {
	console.log('ready');
});