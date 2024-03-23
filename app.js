/*const amount = 1
if(amount <10)
console.log("small no");
else
console.log("large no");
console.log(`its my first node app`);
*/
//console.log(-dirname);

//Modules
/*const sayhi = (name) =>{
    console.log(`hi there ${name}`);
}
//export default
module.exports= sayhi; */
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
console.log(items);
const newitems= _.flattenDeep(items);
console.log(newitems);