const home_result = document.querySelector("#home-result");
const away_result = document.querySelector("#away-result");
const h1p = document.querySelector("#h1point");
const h2p = document.querySelector("#h2point");
const h3p = document.querySelector("#h3point");
const a1p = document.querySelector("#a1point");
const a2p = document.querySelector("#a2point");
const a3p = document.querySelector("#a3point");

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

let awayCount = home_result.textContent;
awayCount = Number(awayCount);

a1p.onclick = function () {
  awayCount++;
  away_result.textContent = awayCount;
};

a2p.onclick = function () {
  answer = awayCount += 2;
  away_result.textContent = answer;
};

a3p.onclick = function () {
  answer = awayCount += 3;
  away_result.textContent = awayCount;
};
