console.log("Portfolio website loaded successfully");

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {
        console.log("Navigation clicked");
    });

});