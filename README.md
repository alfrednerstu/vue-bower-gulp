# Vue + Bower Example

A simple setup using [Gulp](http://gulpjs.com) & [Bower](http://github.com/bower/bower) together with [Vue.js](http://vuejs.org) for modular development.

This is a port of [vue-component-example](http://github.com/vuejs/vue-component-example), but with Component replaced by Bower.

To make things more test friendly, the directives, filters and components simply definition objects in their own files. This is the recommended way of using Vue.js for larger scale applications.

## Usage

To get started, install Gulp and Bower globally, then clone this repo and install local dependencies:

``` bash
$ npm install -g gulp bower
$ git clone https://github.com/alfrednerstu/vue-bower-example.git
$ cd vue-bower-example
$ npm install && bower install
```

### Build

``` bash
$ gulp
```

Open `index.html` to see the result.

### Development

``` bash
$ gulp watch
```

This will watch files for change and re-build automatically.

### Thanks

Thanks to [Even You](https://github.com/yyx990803) for [Vue.js](http://vuejs.org), [Bower Team](http://bower.io/#bower-team) for [Bower](http://bower.io) & [Fractal](http://wearefractal.com/) for [Gulp](http://gulpjs.com/).
