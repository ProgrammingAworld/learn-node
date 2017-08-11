
  var p1 = new Promise(function(res, rej) {
    setTimeout(function() {
      console.log(1000);
    }, 1000)
  })
  .then(function() {
    return 1;
  })

  var p2 = new Promise(function(res, rej) {
    setTimeout(function() {
      console.log(2000);
    }, 2000)
  }).then(function() {
    return 2;
  })

  Promise
    .all([p1, p2])
    .then(function(results) {
      console.log(results);
  })
