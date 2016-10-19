
(function(window){
var helloSpeaker = {};

var speakWord = "Hello";

helloSpeaker.speak =  function (name) {
	window.document.getElementById('List').innerHTML += "<li>" +speakWord + " " + name +"</li>";
    console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;
})(window);