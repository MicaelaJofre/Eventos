// boton de hamburguesa

const icon = document.querySelector(".icon");
const navLi = document.querySelectorAll(".nav__li");

icon.addEventListener("click", () => {
    
    navLi.forEach(n => {
        n.classList.toggle('activado');
    })
});