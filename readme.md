##Usage

```javascript

	var routine = function() {
		thread.on('pizzaOrder',makePizza);

		//Naturally the worker can only reference variables defined within this scope
		function makePizza(type) {
			//hmm..
			thread.send('pizza',type + ' pizza');
		};
	};

	var thread = new Thread(routine);
	thread.on('pizza', function(pizza) {
		console.log(pizza);
		//"cheese pizza"
	});
	thread.send('pizzaOrder','cheese')
	
```

##API

###In-thread

####thread.send [as in itsjoesullivan/events](https://github.com/itsjoesullivan/event#eventsonnamefn)
####thread.on
####thread.trigger

var thread = new Thread(expensiveProcess);

thread.send(obj);

thread.send(name,obj);

thread.on(name,fn);