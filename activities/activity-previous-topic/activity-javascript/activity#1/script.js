let words = [];
let originalOrder = [];

function addText() {
  const input = document.getElementById("text");
  const text = input.value.trim();

  if (text !== "") {
    words.push(text);
    originalOrder.push(text);
    displayWords();
    input.value = "";
  }
}

function displayWords() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < words.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = words[i];
    list.appendChild(listItem);
  }
}

function sortWords() {
  words.sort();
  displayWords();
}

function unsortWords() {
    words = Array.from(originalOrder);
  displayWords();
}
