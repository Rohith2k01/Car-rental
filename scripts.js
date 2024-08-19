function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  }

  // Select all question-item elements
const questionItems = document.querySelectorAll('.question-item');

// Loop through each question item
questionItems.forEach(item => {
    // Select the button inside the current question item
    const button = item.querySelector('.dropbtn');
    
    // Add an event listener to the button
    button.addEventListener('click', function() {
        // Toggle the active state of the dropdown-content
        const dropdownContent = item.querySelector('.dropdown-content');
        
        // Toggle the display of the dropdown content
        if (dropdownContent) {
            dropdownContent.classList.toggle('show');
        }

        // Toggle the "+" and "X" on the button
        if (button.textContent === "+") {
            button.textContent = "X";
        } else {
            button.textContent = "+";
        }
    });
});




