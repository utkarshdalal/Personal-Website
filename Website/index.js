var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString(
    "I am a founder and software developer currently living in India."
  ) //Add your own tagline
  .pauseFor(3000)
  .start();

var granimInstance = new Granim({
  element: "#canvas-image-blending",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  image: {
    source: "assets/snow.jpg", //change image for intro section if desired
    blendingMode: "multiply",
  },
  states: {
    "default-state": {
      gradients: [
        ["#29323c", "#485563"],
        ["#FF6B6B", "#556270"],
        ["#80d3fe", "#7ea0c4"],
        ["#f0ab51", "#eceba3"],
      ],
      transitionSpeed: 8000,
    },
  },
});

var btn1 = document.getElementById("btn1");
btn1.onclick = function () {
  window.open("https://www.gameaway.in", "_blank"); //TODO add your link
};

var btn2 = document.getElementById("btn2");
btn2.onclick = function () {
  window.open("https://www.thoughtleaders.io", "_blank"); //TODO add your link
};
