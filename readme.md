# ColdBox Elixir Browsersync Support

This extension brings Browsersync support to ColdBox Elixir version 2 and up. Prior to that release, Browsersync was baked in.

### Step 1: Install

```bash
npm install coldbox-elixir-browsersync --save-dev
```

### Step 2: Use It

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

## Contributions and Bugs

Project tracking for this project can be found at the [Ortus Solutions Jira](https://ortussolutions.atlassian.net/projects/ELIXIR/summary).  Please log all bugs, improvements, and features there.

Pull requests are welcome and encouraged.  Please [check on the Jira page](https://ortussolutions.atlassian.net/projects/ELIXIR/issues/?filter=allissues) before starting any large amount of work so your time isn't wasted.

Brad Wood (@bdw429s) has a [great guide on submitting pull requests.](https://www.ortussolutions.com/blog/submit-your-first-pull-request-to-an-open-source-project)  If you are unsure where to go, in need of help, or have a question, come ask in the #box-products channel on the [CFML Slack](http://cfml-slack.herokuapp.com/).
