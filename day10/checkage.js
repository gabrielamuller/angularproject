function checkAge(name, age) {
  if (age < 21) {
    console.log("Go home, " + name)
  } else {
    console.log("Welcome " + name)
  }// your code here
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'