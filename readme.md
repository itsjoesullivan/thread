##Thread

<img src="https://raw.github.com/itsjoesullivan/thread/master/badge.png" width=32 style="position:absolute;top:30px;" />

Make workers a little less worker-y:
- Define them in-line rather than via an external include
- Some API abstraction: "send" and "on" instead of postMessage

Works with Chrome + Firefox

##Usage

```javascript
	//Define the worker inside a single function.
	var caesars = function() {
		thread.on('order',makePizza);

		//Naturally the worker can only reference variables defined within this scope
		function makePizza(type) {
			//hmm..
			thread.send('pizza',type + ' pizza');
		};
	};

	var thread = new Thread(caesars);
	thread.on('pizza', function(pizza) {
		console.log(pizza);
		//"cheese pizza"
	});
	thread.send('order','cheese')
```

##API

You're passing messages between the worker and the UI thread. Both have the same API:

###thread.send
Send a message to the other side
```javascript
thread.send(name,arg1,arg2,...)
```

###thread.on
Listen for a message by name
```javascript
thread.on('event-name',function(arg1,arg2,...) {
	//handle event
});
```

