// function generateText() {
//   var element = document.createElement('h2');
//   element.innerHTML = "Hello h2 world";
//   return element;
// }

// module.exports = generateText;

// es6 syntax
export default function() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world with es6 syntax";
  return element;
}

