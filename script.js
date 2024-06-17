// Go to top button's hidden until the page is scrolled down
try {
    document.addEventListener("DOMContentLoaded", function() {

        var goTopButton = document.querySelector(".goTop");
        goTopButton.style.opacity = "0";
        goTopButton.style.transition = "opacity 0.5s ease-out";
      
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                goTopButton.style.opacity = "1";
            } else {
                goTopButton.style.opacity = "0";
            }
        }
      });
} catch (error) {
    console.log(error);
}

// for successful logging
console.log('All successful');