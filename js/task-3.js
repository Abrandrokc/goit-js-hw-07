const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
function changeName() {
    const value = input.value.trim()
     name.textContent = value === "" ? "Anonymous" : value;
    }

input.addEventListener("input", changeName)