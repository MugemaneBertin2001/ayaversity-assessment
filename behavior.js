document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarLinks = document.querySelector('.navbar-links');

    menuIcon.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });

    // Close the menu if a nav link is clicked (for responsiveness)
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarLinks.classList.contains('active')) {
                navbarLinks.classList.remove('active');
            }
        });
    });
});
