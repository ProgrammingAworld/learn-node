var cheerio = require('cheerio');

var $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>');

console.log($('#fruits').text());
