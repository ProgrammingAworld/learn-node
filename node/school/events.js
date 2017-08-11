var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

life.on('comfort',function(who){
  console.log(who + '快来安慰我');
})

life.emit('comfort','小红');
