var Thread = require('thread');

var routine = function() {
	thread.on('order', makePizza);
	function makePizza(type) {
		thread.send('pizza',type + ' pizza');
	};
};

var thread = new Thread(routine);

thread.on('pizza', function(pizza) {
	console.log(pizza);
});

thread.send('order','cheese');