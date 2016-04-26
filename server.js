var express = require('express');
var app = express();
var Firebase = require('firebase');
var ref = new Firebase('https://final3780bomapp.firebaseio.com/');

ref.set({
  {{type}}: "{{daysToCompletion}}",
});

ref.child("{{daysToCompletion}}").on("value", function(snapshot) {
  alert(snapshot.val()); 
});