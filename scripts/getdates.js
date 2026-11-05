const year = document.querySelector("#currentyear");

const currentYear = new Date().getFullYear()
year.textContent = currentYear;

document.querySelector("#lastModified").textContent = document.lastModified;
