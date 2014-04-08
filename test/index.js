var Thread = require('thread');

var routine = function() {
	thread.on('order', makePizza);
	function makePizza(type) {
		thread.send('pizza',type + ' pizza');
	};
};

var thread = new Thread(routine);

var returned = false;

thread.on('pizza', function(pizza) {
  returned = pizza;
});


thread.send('order','cheese');

setTimeout(function() {
  if(!returned) {
    throw "No returned!";
  }
  if (returned !== 'cheese pizza') {
    throw "Didn't return the correct thing!";
  }
}, 100);
