
const catListE = document.querySelector("#catList")

const emojis = {
    catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
    dogEmojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩‍🦱"],
    };

console.log(emojis.catEmojis);

function renderListCat() {
    let catList = document.getElementById("catList");
        for (i = 0; i < emojis.catEmojis.length; i++) {
        let newListElement = document.createElement("li");
        newListElement.innerText = emojis.catEmojis[i];
        catList.appendChild(newListElement);
    }
};

