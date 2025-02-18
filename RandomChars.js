const lettersBtn = document.querySelectorAll(".button");
const mixBtn = document.querySelector(".Mix");

function random() {
  let max = 6;
  let min = 0;
  return Math.floor(Math.random() * (max - min) + min);
}
function mixLetters() {
  const alphabet = [
    ["A", "A", "E", "E", "G", "N"],
    ["A", "B", "B", "J", "O", "O"],
    ["A", "C", "H", "O", "P", "S"],
    ["A", "F", "F", "K", "P", "S"],
    ["A", "O", "O", "T", "T", "W"],
    ["C", "I", "M", "O", "T", "U"],
    ["D", "E", "I", "L", "R", "X"],
    ["D", "E", "L", "R", "V", "Y"],
    ["D", "I", "S", "T", "T", "Y"],
    ["E", "E", "G", "H", "N", "W"],
    ["E", "E", "I", "N", "S", "U"],
    ["E", "H", "R", "T", "V", "W"],
    ["E", "I", "O", "S", "S", "T"],
    ["E", "L", "R", "T", "T", "Y"],
    ["H", "I", "M", "N", "U", "Qu"],
    ["H", "L", "N", "N", "R", "Z"],
  ];

  const arrLettersBtn = lettersBtn.forEach(
    (el, i) => (el.innerHTML = alphabet[i][random()])
  );
}
mixBtn.addEventListener("click", () => {
  mixLetters();
});
