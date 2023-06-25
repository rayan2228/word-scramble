const wordElm = document.querySelector(".word");
const hintElm = document.querySelector(".hint").lastChild;
const showInUi = (pickedWord) => {
  let randomWord = pickedWord.word;
  let randomHint = pickedWord.hint;
  wordElm.innerText = randomWord;
  hintElm.innerText = randomHint;
};
const initialize = () => {
  let randomNumber = Math.floor(Math.random() * words.length);
  let pickedWord = words[randomNumber];
  showInUi(pickedWord);
};
initialize();
