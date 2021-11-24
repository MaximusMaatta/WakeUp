// menu functionality
function toggleMenu() {
  let sidebarmenu = document.querySelector(".container");
  let toggle = document.querySelector(".sidebarmenu");
  sidebarmenu.classList.toggle("active");
  toggle.classList.toggle("active");
}
function myFunction(x) {
  x.classList.toggle("change");
}
// audio liam is loaded when the page is loaded( when the body tag is loaded)
let sunAudio = document.querySelector("#myAudio");
console.log(sunAudio);

function loadDefaultAudio(){
  sunAudio.src = "Audio/audio_liam.mp3"; 
  sunAudio.play();
};

// when sun loads up on click of the sun the Good morning intro text disappears
const sun = document.querySelector(".sun");
sun.addEventListener("click",removeGMText);

function removeGMText() {
  var myobj = document.getElementById("showMe");
  myobj.remove();
}

const content = [
  {
    audio: "Audio/audio_prompt1.mp3", 
    text: "<h2> Sit up and drink water </h2> <br><br> <h4>Did you know that your body is dehydrated from sleeping?<br> Drinking water replenishes the cells in your brain.</h4>"
  },
  { 
    audio: "Audio/audio_prompt2.mp3", 
    text:  "<h2> Take three deep breaths</h2> <br> <h4>This provides the body with the oxygen it needs.</h4>"
  },
  {
    audio: "Audio/audio_prompt3.mp3", 
    text: "<h2> Time to stretch</h2> <br><br> <h4>Reach both arms over your head and make yourself as big as possible. <br> This will get your blood flowing.</h4>",
  },
  {
    audio: "Audio/audio_prompt4.mp3", 
    text: "<h2> Still feeling tired?</h2> <br><br> <h4>Challenge yourself by taking a cold shower.<br> This will definitely wake you up!</h4>",
  },
  {
    audio: "Audio/audio_prompt5.mp3", 
    text: "<h2>Enjoy the rest of your day!</h2> <h4></h4>"
  },

];
var audioElement = document.getElementById("myAudio");
var x = document.getElementById("myMessage");
sun.addEventListener("click", populateAudioAndText)
let index= 0;
let clicks = 0;

function populateAudioAndText() {

  audioElement.src = content[index].audio; 
  audioElement.play();
  x.innerHTML = content[index].text;
  index++;
};
