function pet(words){
  this.words = words;
  this.speak = function(){
    console.log(this.words);
  }
}

function Dog(words){
  //用call实现继承
  pet.call(this,words);
  //用apply实现继承
  pet.apply(this,[words]);
}

var dog = new Dog('汪汪');
dog.speak();
