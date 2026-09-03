const meinButton = document.querySelector("#action-btn");
const meinbody = document.querySelector("body");

const farben = ["red", "blue", "green", "yellow", "purple", "orange"];

meinButton.addEventListener("click", () => {
    const zufallsfarbe = farben[Math.floor(Math.random() * farben.length)];
    meinbody.style.backgroundColor = zufallsfarbe;
});

