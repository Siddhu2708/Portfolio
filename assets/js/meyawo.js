

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("menu");
    const navLinks = document.querySelectorAll(".custom-navbar .link");

    // Toggle the menu when the hamburger is clicked
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Add or remove "active" class
    });

    // Close the menu when any link is clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Remove "active" class
        });
    });
});

