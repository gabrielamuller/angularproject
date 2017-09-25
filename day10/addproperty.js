function addProperty(obj, key) {
  obj[key] = true; // your code here
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true