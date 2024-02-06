function toggleMenu() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

// Récupérer l'élément span avec l'ID "currentDate"
var currentDateElement = document.getElementById("dateTime");

// Tableau des mois en français
var months = [
    "janv.", "fév.", "mars", "avr.", "mai", "juin",
    "juil.", "août", "sept.", "oct.", "nov.", "déc."
];

// Fonction pour formater la date
function formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + " " + months[monthIndex] + " " + year;
}

// Mettre à jour la date actuelle dans l'élément span
currentDateElement.textContent = formatDate(new Date());
