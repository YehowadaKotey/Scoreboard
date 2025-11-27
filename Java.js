const home_result = document.querySelector("#home-result");
const guest_result = document.querySelector("#guest-result");
const h1p = document.querySelector("#h1point");
const h2p = document.querySelector("#h2point");
const h3p = document.querySelector("#h3point");
const g1p = document.querySelector("#g1point");
const g2p = document.querySelector("#g2point");
const g3p = document.querySelector("#g3point");

let homeCount = home_result.textContent;
homeCount = Number(homeCount);

h1p.onclick = function () {
  homeCount++;
  home_result.textContent = homeCount;
};

h2p.onclick = function () {
  answer = homeCount += 2;
  home_result.textContent = answer;
};

h3p.onclick = function () {
  answer = homeCount += 3;
  home_result.textContent = homeCount;
};


let guestCount = home_result.textContent;
guestCount = Number(guestCount);

g1p.onclick = function () {
  guestCount++;
  guest_result.textContent = guestCount;
};

g2p.onclick = function () {
  answer = guestCount += 2;
  guest_result.textContent = answer;
};

g3p.onclick = function () {
  answer = guestCount += 3;
  guest_result.textContent = guestCount;
};
