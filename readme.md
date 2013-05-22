##Usage

```javascript

	var routine = function() {
		thread.on('pizzaOrder',makePizza);

		//Naturally the worker can only reference variables defined within this function
		function makePizza(type) {
			//hmm..
			thread.send('pizza',type + ' pizza');
		};
	};

	var thread = new Thread(routine);

	thread.send('pizzaOrder','cheese')
	thread.on('pizza', function(pizza) {
		console.log(pizza);
		//"cheese pizza"
	});
```

##API



var thread = new Thread(expensiveProcess);

thread.send(obj);

thread.send(name,obj);

thread.on(name,fn);