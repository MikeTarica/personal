function autorun() {

}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;


var nameBuilder = function(firstName = "John", lastName = "Doe") {
    console.log(firstName + " " + lastName);
};

nameBuilder();
var x;
x = 6;
document.getElementById("demo").innerHTML = x;

