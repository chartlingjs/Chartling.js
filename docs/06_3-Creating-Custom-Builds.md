
### Creating custom builds

Chartling.js uses <a href="http://gulpjs.com/" target="_blank">gulp</a> to build the library into a single JavaScript file. We can use this same build script with custom parameters in order to build a custom version.

Firstly, we need to ensure development dependencies are installed. With node and npm installed, after cloning the Chartling.js repo to a local directory, and navigating to that directory in the command line, we can run the following:

```bash
npm install
npm install -g gulp
```

This will install the local development dependencies for Chartling.js, along with a CLI for the JavaScript task runner <a href="http://gulpjs.com/" target="_blank">gulp</a>.

Now, we can run the `gulp build` task, and pass in a comma seperated list of types as an argument to build a custom version of Chartling.js with only specified chart types.

Here we will create a version of Chartling.js with only Line, Radar and Bar charts included:

```bash
gulp build --types=Line,Radar,Bar
```

This will output to the `/custom` directory, and write two files, Chartling.js, and Chartling.min.js with only those chart types included.