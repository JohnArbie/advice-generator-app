const adviceButton = document.getElementById('advice__btn');
const adviceNumber = document.getElementById('advice__number');
const adviceLine = document.getElementById('advice__line');

function loadQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        console.log(response.slip.id)
        adviceNumber.innerHTML = `Advice #${response.slip.id}`;
        adviceLine.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
}

adviceButton.addEventListener("click", loadQuote);