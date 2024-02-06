import Country from "./Country";

class Game {
  #score = 0;
  countries;
  countryIndex = 0;
  currentCountry;
  constructor(tabCountryAll) {
    this.countries = tabCountryAll[0];
    this.currentCountry = new Country(this.countries[this.countryIndex]);
    this.currentCountry.displayFlag();
  }

  getScore() {
    return this.#score;
  }

  addPoint() {
    this.#score++;
  }

  gameOver() {
    if (this.countries.length <= this.countryIndex) {
      return true;
    } else {
      return false;
    }
  }

  nextCountry() {
    if (this.gameOver()) {
      return;
    }
    this.countryIndex++;
    this.currentCountry = new Country(this.countries[this.countryIndex]);
    this.currentCountry.displayFlag();
  }
}

export default Game;
