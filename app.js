import { shuffle } from "lodash";
import Game from "./modules/Game.js";

const URLcountry = `https://restcountries.com/v3.1/all`;

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const shuffleTab = async (res) => {
  const newTab = shuffle(res);
  return newTab;
};

const loadPage = async () => {
  const dataCountry = await getData(URLcountry);
  const newShuffledTab = await shuffleTab(dataCountry);
  const game = new Game([newShuffledTab]);

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
    if (game.gameOver() === false) {
      const reponse = document.querySelector("input").value;
      if (game.currentCountry.correctAnswers.has(response)) {
        game.addPoint();
      }
      game.nextCountry();
      let gamePoint = game.getScore();
      document.querySelector("#score").textContent = `Score : ${gamePoint}`;
    } else {
      alert(`Partie terminée avec ${game.getScore()}`);
    }
    e.currentTarget.reset();
  });
};

loadPage();
