import {checkWord, checkWordInDictionary} from "./Checkwords.js";

const result = document.getElementById("result");
const btnLetters = document.querySelectorAll(".button");
const MIX = document.getElementsByClassName("Mix");
const score = document.getElementById("score");
let currentWord = "";

const letter = ["C", "H", "Y", "E", "O", "L", "M", "R", "W", "Z", "U", "G", "B", "I", "Q", "X"];

function addLetterstoResult() {
    result.textContent = currentWord || "Enter words ...";
}

let isMouseDown = false;

btnLetters.forEach(button => {
    button.addEventListener("mousedown", (event) => {
        if (event.button === 0){
            isMouseDown = true;
            currentWord += button.innerText;
            addLetterstoResult();

            // btnLetters.classList.add("btnLettersWork");
            
        }
    });
    
    button.addEventListener("mouseover", (event) => {
        if (event.button === 0){
            if (isMouseDown) {
                currentWord += button.innerText;
                // btnLetters.classList.add ("btnLettersWork");
                addLetterstoResult();    
                }
            }
        });
        
        button.addEventListener("mouseup", () => {
            isMouseDown = false;
            addLetterstoResult();
            result.textContent = currentWord;
            getScore (currentWord);
            isRightDic (currentWord);
            currentWord = "";
    });
});

let scoreArr = 0;

function getScore (currentWord){
    
    checkWordInDictionary(`${currentWord}`).then(data => {
        if (data && checkWord(currentWord)){
            if (currentWord.length >= 8){
                score.textContent = scoreArr += 11;
            }
            if(currentWord.length === 7){
                score.textContent = scoreArr += 5;
            }
            if(currentWord.length === 6){
                score.textContent = scoreArr += 3;
            }
            if(currentWord.length === 5){
                score.textContent = scoreArr += 2;
            }
            if(currentWord.length === 4 || currentWord.length === 3){
                score.textContent = scoreArr += 1;
            }
            }
            scoreArr = 0;
        })
};

function isRightDic(currentWord){
    fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`).then(data => {
        if (data.status === 404){
            result.textContent = `слово не подходит`;   
        }
    })  
}
