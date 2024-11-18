const InfoWord = document.getElementById("result") // класс

const allWords = []

const word = (event) => {          // обработчик события при получения слова

    const value = event.target.value;
    allWords.push(value)

}

function checkWord(word) {          // Не добавляет слова меньше минимальной длины. Минимальная длина 3

    let normalLength = 3;

    if(word.length < normalLength){

        return InfoWord.textContent = `${word} + "Короткое слово"`

    }else{

        return InfoWord.textContent = `${word}`

    }
    
}

async function checkWordInDictionary(word) {
    let otvet = ""
    const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/ ${word}`
    );
    if (response.status === 404) {
        return false;
    } 
    const data = await response.json();
    return data.length > 0;  
}


export {checkWord, checkWordInDictionary,};


// const dictionary = "https://api.dictionaryapi.dev/api/v2/entries/en/";   // Подключаем API словаря







// const checkDict = async (element) => { 
//     element.preventDefault(); 
//     if (!word.trim()) return

//     try {

//         const data = await fetch(`${dictionary} ${word}`) // получаем данные с сервера

//         if(!data.ok){ return false}  // если данных нет, то прерываем функцию

//         const dataNew = await data.json(); // при данных возвращаем true

//         if(dataNew.ok){

//             return true

//         }

//     }catch(err){

//         console.log(err);

//     }
// }

// checkDict('dfghjk').then(data =>console.log(data));

// export {checkWord, checkDict};