var element = document.getElementById("app");
console.log(element);
// innerelement = element.innerHTML;
var content = "Howdy Bart"
var changeMessage = function () {
  element.innerHTML = content;
};
