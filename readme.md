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

You're passing messages between the worker and the UI thread. Both have the same API:

###thread.send

```javascript
	thread.send(name,arg1,arg2,...)
```

Send a message to the other 

###thread.on
As in [itsjoesullivan/events](https://github.com/itsjoesullivan/event#eventsonnamefn)

```javascript
	thread.on('event-name',function(arg1,arg2,...) {
		//handle event
	});
```