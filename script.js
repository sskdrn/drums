
window.addEventListener("keydown", (event) => {
  var audio = document.querySelector("audio[data-sound=\"" + (event.keyCode%16 + 1) + "\"]");
  audio.currentTime = 0;
  audio.play();
});

// Click, touch or keys to play!

// crash varibles
crashCymbolAll = document.getElementById('Crash');
crashCymbol = document.getElementById('Crash-Cymbol');
crashAudio = document.getElementById('Crash-Audio');
// right tom drum varibles
rightTomDrumAll = document.getElementById('Tom-Right-All');
rightTomDrum = document.getElementById('Tom-Right-Drum');
smallTomAudio = document.getElementById('Small-Rack-Tom-Audio');
// left tom drum varibles
leftTomDrumAll = document.getElementById('Tom-Left-All');
leftTomDrum = document.getElementById('Tom-Left-Drum');
bigTomAudio = document.getElementById('Big-Rack-Tom-Audio');
// hi-hat varibles
hiHatAll = document.getElementById('Hi-Hat');
hiHatTop = document.getElementById('Hi-Hat-Top');
hiHatBottom = document.getElementById('Hi-Hat-Bottom');
hiHatStandTop = document.getElementById('Hi-Hat-Stand-Top');
hiHatOpenAudio = document.getElementById('Hi-Hat-Open-Audio');
hiHatClosedAudio = document.getElementById('Hi-Hat-Closed-Audio');
// floor tom drum varibles
floorTomDrumAll = document.getElementById('Floor-Tom');
floorTomAudio = document.getElementById('Floor-Tom-Audio');
// snare drum varibles
snareDrumAll = document.getElementById('Snare');
snareDrum = document.getElementById('Snare-Drum');
snareAudio = document.getElementById('Snare-Audio');
// kick drum varibles
kickDrumAll = document.getElementById('Kick');
kickAudio = document.getElementById('Kick-Audio');
// Autoplay button
autoButton = document.getElementById('auto-button');

// crash wobble
var crashtl = new TimelineMax({
  paused: true
});
crashtl.to(crashCymbol, 0.1, { rotation: 8, transformOrigin: "50% 50%" })
  .to(crashCymbol, 1.5, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3) });

// crash audio
function playCrashAudio() {
  crashAudio.currentTime = 0;
  crashAudio.play();
}

// crash stuff
function crash() {
  var audio = document.querySelector("audio[data-sound=\"5\"]");
  audio.currentTime = 0;
  audio.play();
  crashtl.restart();
  crashtl.play();
}

// Do the crash stuff when clicked
crashCymbolAll.addEventListener("click", crash);

// right tom drum wobble
var rightTomtl = new TimelineMax({
  paused: true
});
rightTomtl.to(rightTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(rightTomDrum, 0.1, { scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut }, '0')
  .to(rightTomDrumAll, 0.1, { rotation: 2.5, transformOrigin: "0 50%", ease: Elastic.easeOut }, '0')
  .to(rightTomDrum, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut })
  .to(rightTomDrumAll, 0.6, { rotation: 0, transformOrigin: "0 50%", ease: Elastic.easeOut }, '-=0.4');

// right tom audio
function playSmallTomAudio() {
  smallTomAudio.currentTime = 0;
  smallTomAudio.play();
}

// right tom stuff
function rightTom() {
  var audio = document.querySelector("audio[data-sound=\"9\"]");
  audio.currentTime = 0;
  audio.play();
  rightTomtl.restart();
  rightTomtl.play();
}

// Do the right tom stuff when clicked
rightTomDrumAll.addEventListener("click", rightTom);

// left tom drum wobble
var leftTomtl = new TimelineMax({
  paused: true
});
leftTomtl.to(leftTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(leftTomDrum, 0.1, { scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut }, '0')
  .to(leftTomDrumAll, 0.1, { rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut }, '0')
  .to(leftTomDrum, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut })
  .to(leftTomDrumAll, 0.6, { rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut }, '-=0.4');

// left tom audio
function playBigTomAudio() {
  bigTomAudio.currentTime = 0;
  bigTomAudio.play();
}

// left tom tl stuff
function leftTom() {
  var audio = document.querySelector("audio[data-sound=\"9\"]");
  audio.currentTime = 0;
  audio.play();
  leftTomtl.restart();
  leftTomtl.play();
}

// Do the left tom stuff when clicked
leftTomDrumAll.addEventListener("click", leftTom);

// floor tom drum wobble
var floorTomtl = new TimelineMax({
  paused: true
});
floorTomtl.to(floorTomDrumAll, 0.1, { scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(floorTomDrumAll, 0.1, { scaleY: 0.95, transformOrigin: "50% 100%", ease: Expo.easeOut }, '0')
  .to(floorTomDrumAll, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// floor tom audio
function playFloorTomAudio() {
  floorTomAudio.currentTime = 0;
  floorTomAudio.play();
}

// floor tom tl stuff
function floorTom() {
  var audio = document.querySelector("audio[data-sound=\"1\"]");
  audio.currentTime = 0;
  audio.play();
  floorTomtl.restart();
  floorTomtl.play();
}

// Do the floor tom stuff when clicked
floorTomDrumAll.addEventListener("click", floorTom);

// snare drum wobble
var snaretl = new TimelineMax({
  paused: true
});
snaretl.to(snareDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
  .to(snareDrum, 0.1, { scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut }, '0')
  .to(snareDrum, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// snare audio
function playSnareAudio() {
  snareAudio.currentTime = 0;
  snareAudio.play();
}

// snare tl stuff
function snare() {
  snaretl.restart();
  snaretl.play();
  var audio = document.querySelector("audio[data-sound=\"7\"]");
  audio.currentTime = 0;
  audio.play();
}

// Do the snare stuff when clicked
snareDrumAll.addEventListener("click", snare);

// kick drum wobble
var kicktl = new TimelineMax({
  paused: true
});
kicktl.to(kickDrumAll, 0.1, { scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut })
  .to(kickDrumAll, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });

// kick audio
function playKickAudio() {
  kickAudio.currentTime = 0;
  kickAudio.play();
}

// kick tl stuff
function kick() {
  var audio = document.querySelector("audio[data-sound=\"4\"]");
  audio.currentTime = 0;
  audio.play();
  kicktl.restart();
  kicktl.play();
}

// Do the kick stuff when clicked
kickDrumAll.addEventListener("click", kick);

// hi-hat stand up/down
var hiHatUptl = new TimelineMax({
  paused: true
});
hiHatUptl.to(hiHatStandTop, 0.3, { y: "-5%", ease: Bounce.easeOut });

// hi-hat wobble
var hiHattl = new TimelineMax({
  paused: true
});
hiHattl.to([hiHatTop, hiHatBottom], 0.1, { rotation: -4, transformOrigin: "50% 50%" })
  .to([hiHatTop, hiHatBottom], 0.6, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2) });

// high hat audio
function playHiHatClosedAudio() {
  hiHatClosedAudio.currentTime = 0;
  hiHatClosedAudio.play();
}
function playHiHatOpenAudio() {
  hiHatOpenAudio.currentTime = 0;
  hiHatOpenAudio.play();
}

// hi-hat counter and tl stuff
hiHati = 0;
function hiHat() {
  ++hiHati;
  hiHattl.restart();
  hiHattl.play();
  var audio = document.querySelector("audio[data-sound=\"3\"]");
  audio.currentTime = 0;
  audio.play();
  if (hiHati < 8) {
    hiHatUptl.reverse();
  } else {
    var audio = document.querySelector("audio[data-sound=\"3\"]");
    audio.currentTime = 0;
    audio.play();
    hiHatUptl.play();
    hiHati = 0;
  }
}

// Do the hi-hat stuff when clicked
hiHatAll.addEventListener("click", hiHat);

// key triggers
document.onkeydown = function (e) {
  thisKeyID = 'Key-' + e.keyCode;
  thisKey = document.getElementById(thisKeyID);
  hiHat();
  snare();
  kick();
  floorTom();
  crash();
  leftTom();
  rightTom();

};

//Click Events
var canvas=document.getElementById("myCanvas");
canvas.addEventListener("click",function(){
  hiHat();
  snare();
  kick();
  floorTom();
  crash();
  leftTom();
  rightTom();
  var audio = document.querySelector("audio[data-sound=\"" + ((event.x+event.y)%16 +1) + "\"]");
  audio.currentTime = 0;
  audio.play();
});
canvas.addEventListener("touchdown",function(){
  hiHat();
  snare();
  kick();
  floorTom();
  crash();
  leftTom();
  rightTom();
  var audio = document.querySelector("audio[data-sound=\"" + ((event.x+event.y)%16 + 1) + "\"]");
  audio.currentTime = 0;
  audio.play();
});