# ColdBox Elixir Browsersync Support

This extension brings Browsersync support to ColdBox Elixir version 2 and up. Prior to that release, Browsersync was baked in.

## Step 1: Install

```bash
npm install coldbox-elixir-browsersync --save-dev
```

## Step 2: Use It

Within your Gulpfile, add:

```js
elixir(function(mix) {
  mix.browserSync( {
	proxy: 'localhost:12345'
  } );
});
```

Where `localhost:12345` is the host and port of your app.

You can add any BrowserSync options in the object passed to `mix.browsersync()` (See http://www.browsersync.io/docs/options/)