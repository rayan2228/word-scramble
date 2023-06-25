const wordElm = document.querySelector(".word");
const hintElm = document.querySelector(".hint").lastChild;
const wordInputElm = document.querySelector(".wordInput");
const refreshWordElm = document.querySelector(".refreshWord");
const checkWordElm = document.querySelector(".checkWord");
const shuffleWord = (pickedWord) => {
  let wordArr = pickedWord.split("");
  for (let index = wordArr.length - 1; index >= 0; index--) {
    let j = Math.floor(Math.random() * (index + 1));
    [wordArr[index], wordArr[j]] = [wordArr[j], wordArr[index]];
  }
  let finalWord = wordArr.join("");
  correctWord = pickedWord.toLowerCase();
  return finalWord;
};
const showInUi = (pickedWordAndHint) => {
  let randomWord = shuffleWord(pickedWordAndHint.word);
  let randomHint = pickedWordAndHint.hint;
  wordElm.innerText = randomWord;
  hintElm.innerText = randomHint;
};
const initialize = () => {
  let randomNumber = Math.floor(Math.random() * words.length);
  let pickedWordAndHint = words[randomNumber];
  showInUi(pickedWordAndHint);
};
initialize();
const checkWord = () => {
    let userWord = wordInputElm.value.toLowerCase();
    if (userWord === correctWord) {
        console.log("done");
    }
};
refreshWordElm.addEventListener("click", initialize);
checkWordElm.addEventListener("click", checkWord);
