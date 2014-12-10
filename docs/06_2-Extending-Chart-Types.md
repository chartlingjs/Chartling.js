### Extending existing chart types

We can also extend existing chart types, and expose them to the API in the same way. Let's say for example, we might want to run some more code when we initialize every Line chart.

```javascript
// Notice now we're extending the particular Line chart type, rather than the base class.
Chart.types.Line.extend({
	// Passing in a name registers this chart in the Chart namespace in the same way
	name: "LineAlt",
	initialize: function(data){
		console.log('My Line chart extension');
		Chart.types.Line.prototype.initialize.apply(this, arguments);
	}
});

// Creates a line chart in the same way
new Chart(ctx).LineAlt(data);
// but this logs 'My Line chart extension' in the console.
```
