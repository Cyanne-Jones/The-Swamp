var fuckButton = document.querySelector("#fuck-around");
var entirePage = document.querySelector("#entire-page")
var body = document.querySelector("body");
var audio = new Audio('./assets/what-are-you.mp3');
var getOutButton = document.querySelector("#get-out");
fuckButton.addEventListener('click', findOut);
getOutButton.addEventListener('click', getOut);



function findOut() {
  audio.play();
  body.classList.add("found-out");
  entirePage.innerHTML =
    `<h1 class="found-out-text">FIND OUT:</h1>
    <h3 class="found-out-text">the SWAMP edition</h3>`
};

function getOut() {
  body.classList.add("got-out");
  entirePage.innerHTML =
   `<h1>Thank you,</h1>
   <h3>You're now in Duloc.</h3>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/0KoR5thqObs?controls=0&amp;start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
};
