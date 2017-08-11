var fs = require('fs');

var imageData = fs.readFileSync('./node.jpg');
fs.writeFileSync('node_copy_sync.jpg',imageData);
