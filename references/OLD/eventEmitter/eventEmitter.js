var events = require('events');
var util = require('util');

var Student = function (name){
  this.name = name;
};

util.inherits(Student, events.EventEmitter);

var adhi = new Student('Adhi');
var arya = new Student('Arya');
var anjali = new Student('Anjali');

var students = [adhi, arya, anjali];
students.forEach(function(student){
  student.on('speak', function(msg){
    console.log(student.name + ' said: '+ msg);
  });
});

adhi.emit('speak', 'I am crazy!!!');
arya.emit('speak', 'I am great lover!');
anjali.emit('speak','I am first in my class.');
