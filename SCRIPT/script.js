function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");
    
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
      content.style.marginLeft = "250px"; // Ajustement de la marge gauche
    } else {
      sidebar.style.left = "-250px";
      content.style.marginLeft = "0"; // Réinitialisation de la marge gauche
    }
  }
  function showContent(contentId) {
    // Masquer tout le contenu caché
    var hiddenContents = document.querySelectorAll('.hidden-content');
    hiddenContents.forEach(function(content) {
      content.style.display = 'none';
    });
  
    // Afficher le contenu associé au lien cliqué
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';
  }

// Fonction pour afficher ou masquer le formulaire de recherche et placer le focus dans la barre de recherche
function toggleSearchForm() {
var searchForm = document.getElementById("search-form");
searchForm.classList.toggle("show");
var searchInput = document.getElementById("search-input");
searchInput.focus(); // Mettre le focus dans la barre de recherche
}

// Fonction de recherche en temps réel
function searchLinks() {
var searchTerm = document.getElementById("search-input").value.toLowerCase();
var searchResults = document.getElementById("search-results");
var links = document.querySelectorAll(".navbar-menu li a, #sidebar ul li a");
var noResultsMessage = document.getElementById("no-results-message");

searchResults.innerHTML = ""; // Réinitialiser les résultats de la recherche
noResultsMessage.textContent = ""; // Réinitialiser le message d'absence de résultats

var resultsFound = false; // Variable pour suivre si des résultats ont été trouvés

links.forEach(function(link) {
  var linkText = link.textContent.toLowerCase();
  if (linkText.includes(searchTerm)) {
    var li = document.createElement("li");
    var linkElement = document.createElement("a");
    linkElement.textContent = linkText;
    linkElement.setAttribute("href", link.getAttribute("href"));
    li.appendChild(linkElement);
    searchResults.appendChild(li);
    resultsFound = true; // Indiquer qu'au moins un résultat a été trouvé
  }
});

if (!resultsFound) {
  noResultsMessage.textContent = "Aucun résultat trouvé"; // Afficher le message d'absence de résultats
  noResultsMessage.style.color = "red"; // Mettre la couleur en rouge
}
}
// Fonction pour effacer le texte dans le champ de recherche
function clearSearchInput() {
var searchInput = document.getElementById("search-input");
searchInput.value = ""; // Effacer le texte
searchInput.focus(); // Remettre le focus dans le champ de recherche
}
// Fonction pour gérer la visibilité de la petite croix en fonction du contenu du champ de recherche
function toggleClearInput() {
var clearInput = document.getElementById("clear-input");
var searchInput = document.getElementById("search-input");
if (searchInput.value.trim() !== "") {
  clearInput.style.display = "inline-block"; // Afficher la petite croix si le champ de recherche n'est pas vide
} else {
  clearInput.style.display = "none"; // Masquer la petite croix si le champ de recherche est vide
}
}

// Appeler la fonction de gestion de la visibilité de la petite croix à chaque changement dans le champ de recherche
document.getElementById("search-input").addEventListener("input", toggleClearInput);


// Obtenez l'élément span avec l'ID "currentYear"
var currentYearElement = document.getElementById("currentYear");

// Obtenez l'année actuelle
var currentYear = new Date().getFullYear();

// Mettez à jour le contenu de l'élément span avec l'année actuelle
currentYearElement.textContent = currentYear;


// Ajoutez ce code à votre fichier JavaScript ou dans une balise <script> dans votre HTML
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById('backToTopBtn');

  // Affiche ou masque la flèche en fonction du défilement
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          button.style.display = 'block';
      } else {
          button.style.display = 'none';
      }
  };

  // Fait défiler la page vers le haut lorsque la flèche est cliquée
  button.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
});