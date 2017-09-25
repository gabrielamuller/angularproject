function getProperty(obj, key) {
  return obj[key]// your code here
}

var obj = {
  name: 'James',
  age: "Young"
};
var output = getProperty(obj, 'name');
console.log(output); // --> 'value'