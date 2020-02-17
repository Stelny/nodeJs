var fs = require('fs');


//Delete and Edit
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('./stuff', function(err, data){
      console.log(err);
    });
})


/*fs.mkdir('stuff', function(){
  fs.readFile('readme.txt','utf8', function(err, data) {
    fs.writeFile('stuff/writeMe.txt', data, function(){
      console.log('ok');
    })
  });
});*/

//Block code
//fs.rmdirSync('stuff');


//READ and WRITE
/*fs.readFile('readme.txt', 'utf8', function(err, data){
  fs.writeFileSync('writeMe.txt', data);
});*/

//Read and Write
//fs.writeFileSync('writeMe.txt', readMe);

/*var readMe = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readMe);
//code*/







//Events
/*var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var marry = new Person('marry');
var ryu = new Person('ryu');
var people = [james, marry, ryu];

people.forEach(function(person) {
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg);
  });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want break');*/



/*myEmitter.on('someEvent', function(msg){
  console.log(msg)
});

myEmitter.emit('someEvent', 'the event was emitted');*/

/*var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal','ryu', 'babl']));
console.log(stuff.adder(5,6));
console.log(stuff.pi);*/

/*//normal function statement
function sayHi() {
  console.log("Hi");
}
sayHi();

//function expression
var sayBye = function() {
    console.log("bye");
};
sayBye();*/
/*function CallFunction(fun) {
  fun();
}

//function expression
var sayBye = function() {
    console.log("bye");
};

CallFunction(sayBye);*/
