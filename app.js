// let result =document.getElementById("result");



// if(!localStorage.getItem("xd") !== "true"){
//     result.textContent = "Witamy 1 raz na stronie";
//     localStorage.setItem("xd","true");
// }
// document.getElementById("contactFORM").addEventListener("submit", function(event){
// event.preventDefault();
// result.textContent = "Dziekujemy za przeslanie formularza";
// });


document.getElementById("contactFORM").addEventListener("submit", function(event){
event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const gender = document.querySelector('input[name="gender"]:checked')?.value || "Nie podano";

const interest = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(checkbox =>checkbox.value).join(", ") || "Brak zainteresowan";
const resultDIV = document.getElementById("result");
resultDIV.innerHTML = `
<h3>Podsumowanie<h3>
<p><strong>Imie:</strong>${name}</p>
<p><strong>Email:</strong>${email}</p>
<p><strong>Plec:</strong>${gender}</p>
<p><strong>Zainteresowania:</strong>${interest}</p>
<p><strong>Wiadomosc:</strong>${message}</p>`;
});