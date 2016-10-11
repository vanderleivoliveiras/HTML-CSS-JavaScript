(function(){

var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.speak = function (name) {
	window.document.getElementById('List').innerHTML += "<li>" +speakWord + " " + name +"</li>";
	console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;
})(window);