var word = function() {
  return {
    name: 'xiaoming',
    age: 12,
    say: function () {
      console.log(this.name + " " + this.age);
    }
  }
}
