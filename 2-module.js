const names=require('./1-module')
//console.log(names);
const myfunc = require('./app')
myfunc(names.surname);
myfunc('komal');
const data = require('./3-alternative')
require('./4-mind-grende')