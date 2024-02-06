class Country {
  datas;
  correctAnswers;
  flag;
  constructor(countryObject) {
    this.flag = countryObject.flag;
    this.datas = countryObject;
    //this.correctAnswers = new Set(countryObject);
    this.getCorrectAnswers();
  }

  getCorrectAnswers() {
    console.log(this.datas.translations);
    //this.countryObject.translations.forEach((element) => {
    //  console.log(element.common);
    //});
  }

  checkAnswer(stringAnswer) {
    const finalAnswer = stringAnswer.toLowerCase();
    console.log(finalAnswer);
    return this.correctAnswers.has(finalAnswer);
  }

  displayFlag() {
    const divFlag = document.querySelector("#flag");
    const html = `
        <div id="flag">
	        <h1>${this.flag}</h1>
        </div>`;
    divFlag.innerHTML = html;
    return html;
  }
}

export default Country;
