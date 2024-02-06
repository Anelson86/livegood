// Obtenez l'élément span avec l'ID "currentYear"
var currentYearElement = document.getElementById("currentYear");

// Obtenez l'année actuelle
var currentYear = new Date().getFullYear();

// Mettez à jour le contenu de l'élément span avec l'année actuelle
currentYearElement.textContent = currentYear;