const wordElm = document.querySelector(".word");
const hintElm = document.querySelector(".hint").lastChild;
const wordInputElm = document.querySelector(".wordInput");
const infoElm = document.querySelector(".info");
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
const checkWord = () => {
  let userWord = wordInputElm.value.toLowerCase();
  if (userWord) {
    if (userWord === correctWord) {
      infoElm.style.color = "#A2FF86";
      infoElm.style.display = "block";
      infoElm.innerText = "correct answer.keep playing";
      wordInputElm.value = "";
      setTimeout(() => {
        initialize();
      }, 1000);
    }
  } else {
    infoElm.style.color = "#F24C3D";
    infoElm.style.display = "block";
    infoElm.innerText = "please enter the correct word";
  }
};
const inputValueCheck = () => {
  infoElm.style.display = "none";
};
const initialize = () => {
  let randomNumber = Math.floor(Math.random() * words.length);
  let pickedWordAndHint = words[randomNumber];
  showInUi(pickedWordAndHint);
  inputValueCheck();
};
refreshWordElm.addEventListener("click", initialize);
checkWordElm.addEventListener("click", checkWord);
wordInputElm.addEventListener("keyup", inputValueCheck);
initialize();
