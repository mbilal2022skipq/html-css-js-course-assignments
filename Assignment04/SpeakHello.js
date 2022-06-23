(function (window) {

  var speakWord = "Hello";
  var helloSpeaker = {}; // STEP03

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker; //expose helloSpeaker Object to global object

})(window);