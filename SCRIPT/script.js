document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.side-menu').style.left = '0';
});

document.querySelector('.close-icon').addEventListener('click', function() {
    document.querySelector('.side-menu').style.left = '-250px';
});
