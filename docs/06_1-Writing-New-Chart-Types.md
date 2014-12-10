### Writing new chart types

Chartling.js aims to provide a platform for developers to create their own custom chart types, and be able to share and utilise them through the Chartling.js API.

The format is relatively simple, there are a set of utility helper methods under `Chart.helpers`, including things such as looping over collections, requesting animation frames, and easing equations.

On top of this, there are also some simple base classes of Chart elements, these all extend from `Chart.Element`, and include things such as points, bars and scales.

```javascript
Chart.Type.extend({
	// Passing in a name registers this chart in the Chart namespace
	name: "Scatter",
	// Providing a defaults will also register the deafults in the chart namespace
	defaults : {
		options: "Here",
		available: "at this.options"
	},
	// Initialize is fired when the chart is initialized - Data is passed in as a parameter
	// Config is automatically merged by the core of Chartling.js, and is available at this.options
	initialize:  function(data){
		this.chart.ctx // The drawing context for this chart
		this.chart.canvas // the canvas node for this chart
	},
	// Used to draw something on the canvas
	draw: function() {
	}
});

// Now we can create a new instance of our chart, using the Chartling.js API
new Chart(ctx).Scatter(data);
// initialize is now run
```
