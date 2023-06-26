const wordElm = document.querySelector(".word");
const hintElm = document.querySelector(".hint").lastChild;
const wordInputElm = document.querySelector(".wordInput");
const infoElm = document.querySelector(".info");
const timeElm = document.querySelector(".time").children[0];
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
        clearCount();
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

const countDown = () => {
  let count = 20;
  counter = setInterval(() => {
    count--;
    timeElm.innerText = count;
    if (count == 0) {
      clearCount();
      initialize();
    }
  }, 1000);
};
const initialize = () => {
  let randomNumber = Math.floor(Math.random() * words.length);
  let pickedWordAndHint = words[randomNumber];
  wordInputElm.value = "";
  showInUi(pickedWordAndHint);
  inputValueCheck();
  countDown();
};
const clearCount = () => {
  clearInterval(counter);
};
refreshWordElm.addEventListener("click", () => {
  clearCount();
  initialize();
});
checkWordElm.addEventListener("click", checkWord);
wordInputElm.addEventListener("keyup", inputValueCheck);
initialize();
