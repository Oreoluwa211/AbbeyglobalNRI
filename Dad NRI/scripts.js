window.addEventListener("scroll", function() {
 // Get the elements
 const littleHeader = document.querySelector(".little-header");
 const secondHeader = document.querySelector(".second-header");

 // Check scroll position
 if (window.scrollY > 50) { // Change this value to adjust when the transparency begins
   // Make the headers transparent
   littleHeader.style.background = "rgba(178, 242, 187, 0.1)";
   secondHeader.style.background = "rgba(178, 242, 187, 0.1)";
 } else {
   // Restore the original background
   littleHeader.style.background = "linear-gradient(45deg, #b2f2bb, #d3f9d8, #c3e6cb, #a9e9ab)";
   secondHeader.style.background = "linear-gradient(45deg, #b2f2bb, #d3f9d8, #c3e6cb, #a9e9ab)";
 }
});


document.addEventListener("DOMContentLoaded", function () {
 const menuButton = document.querySelector('.mobile-menu-button');
 const insideMenuBar = document.querySelector('.inside-menu-bar');
 const overlay = document.createElement('div'); // Create an overlay element

 overlay.classList.add('overlay');
 document.body.appendChild(overlay); // Append overlay to the body

 // Toggle menu visibility on button click
 menuButton.addEventListener('click', function () {
     insideMenuBar.classList.toggle('active');
     overlay.style.display = 'inline'; // Show overlay when menu is open

     // Hide the menu button when the menu is active
     if (insideMenuBar.classList.contains('active')) {
         menuButton.style.display = 'none';
     }
 });

 // Close the menu when clicking outside (on the overlay)
 overlay.addEventListener('click', function () {
     insideMenuBar.classList.remove('active');
     overlay.style.display = 'none'; // Hide the overlay
     menuButton.style.display = 'block'; // Show the menu button again
 });
});