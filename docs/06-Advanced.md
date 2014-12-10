### Prototype methods

For each chart, there are a set of global prototype methods on the shared `ChartType` which you may find useful. These are available on all charts created with Chartling.js, but for the examples, let's use a line chart we've made.

```javascript
// For example:
var myLineChart = new Chart(ctx).Line(data);
```

#### .clear()

Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.

```javascript
// Will clear the canvas that myLineChart is drawn on
myLineChart.clear();
// => returns 'this' for chainability
```

#### .stop()

Use this to stop any current animation loop. This will pause the chart during any current animation frame. Call `.render()` to re-animate.

```javascript
// Stops the charts animation loop at its current frame
myLineChart.stop();
// => returns 'this' for chainability
```

#### .resize()

Use this to manually resize the canvas element. This is run each time the browser is resized, but you can call this method manually if you change the size of the canvas nodes container element.

```javascript
// Resizes & redraws to fill its container element
myLineChart.resize();
// => returns 'this' for chainability
```

#### .destroy()

Use this to destroy any chart instances that are created. This will clean up any references stored to the chart object within Chartling.js, along with any associated event listeners attached by Chartling.js.

```javascript
// Destroys a specific chart instance
myLineChart.destroy();
```

#### .toBase64Image()

This returns a base 64 encoded string of the chart in it's current state.

```javascript
myLineChart.toBase64Image();
// => returns png data url of the image on the canvas
```

#### .generateLegend()

Returns an HTML string of a legend for that chart. The template for this legend is at `legendTemplate` in the chart options.

```javascript
myLineChart.generateLegend();
// => returns HTML string of a legend for this chart
```

