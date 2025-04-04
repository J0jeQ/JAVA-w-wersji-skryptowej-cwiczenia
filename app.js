

document.getElementById("contactFORM").addEventListener("submit", function(event){
event.preventDefault();


const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
const gender = document.querySelector('input[name="gender"]:checked')?.value || "Nie podano";
const interest = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(checkbox =>checkbox.value).join(", ") || "Brak zainteresowan";

clearErrors();
const isvalid = true;

if(name.length <2){
    displayError("name","Imie musi miec co najmniej 2 znaki");
    isvalid = false;
}

if(message.length <5){
    displayError("message","Wiadomosc musi miec wiecej niz 5 slow")
    isvalid = false;
}
// if(!email.include("@")){
//     displayError("email","Email musi miec @")
//     isvalid - false;
// }

if(isvalid){
    const resultDIV = document.getElementById("result");
resultDIV.innerHTML = `
<h3>Podsumowanie<h3>
<p><strong>Imie:</strong>${name}</p>
<p><strong>Email:</strong>${email}</p>
<p><strong>Plec:</strong>${gender}</p>
<p><strong>Zainteresowania:</strong>${interest}</p>
<p><strong>Wiadomosc:</strong>${message}</p>`;
}


});

function displayError(fieldID, message){
const field = document.getElementById(fieldID);
const errorDiv = document.createElement("div");
errorDiv.className = "error-message";
errorDiv.textContent = message;
field.parentNode.insertBefore(errorDiv,field.nextSibling);

}
function clearErrors(){
const errors = document.getElementsByClassName("error-message")
while(errors.length >0){
    errors[0].parentNode.removeChild(errors[0]);

}

}