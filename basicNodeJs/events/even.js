let events = require('events');
let util = require('util');

const Person = function(name){
    this.name = name;
};
util.inherits(Person, events.EventEmitter);

let ngoc = new Person("Ngoc");
let nguyet = new Person("Nguyet");
const people = [ngoc,nguyet];
people.forEach((person)=>{
    person.on('speak',function(msg){
        console.log(person.name + ' said: ' + msg);
    })
})
ngoc.emit('speak','hey dudes');