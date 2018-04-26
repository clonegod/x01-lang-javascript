/** CommonJS snytax */
// var sub = require('./sub');
// require('./main.css');
// require('./main.scss');

// var $ = require('jquery');
// var moment = require('moment');

// var app  = document.createElement('div');
// app.innerHTML = '<h1>Hello World it</h1>';
// document.body.appendChild(app);
// app.appendChild(sub());
// $('body').append('<p>look at me! now is ' + moment().format() + '</p>');


/** es6 syntax */
import './main.css';
import './main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

// import custom jquery plugin
import 'imports-loader?jQuery=jquery!./plugin.js';


// generate html content
let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  //call our jquery plugin!
  $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());


