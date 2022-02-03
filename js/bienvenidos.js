let wedding = localStorage.getItem("DatosBoda") == null ? [] : JSON.parse(localStorage.getItem("DatosBoda"));
const id = localStorage.getItem("id");

for (let w of wedding) {
    if (w.user === id) {
        wedding = w;
        break;
    }
}
document.getElementById("weddingBoyfriendsWelcome").innerHTML = `<span>${wedding.boyfriend}</span> & <span>${wedding.girlfriend}</span>`;


document.getElementById("weddingDateWelcome").innerHTML = `<span>${wedding.date}</span>`;

document.getElementById("weddingLocationWelcome").innerHTML = `La boda será en la ciudad de " <span>${wedding.location}</span> "`;