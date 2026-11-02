function toggleMenu() {
    var navList = document.getElementById("nav-list");
    navList.classList.toggle("active");
} 
// Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}); 
// Enquiry Form Logic
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents page from reloading
        let name = document.getElementById('name').value;
        let service = document.getElementById('service').value;
        let responseDiv = document.getElementById('formResponse');
       
        // Simulate a custom response based on what they selected
        if(service === 'food') {
            responseDiv.innerHTML = `Thank you ${name}. We have space for volunteers this weekend for food packing. We will email you the details!`;
        } else if (service === 'disaster') {
            responseDiv.innerHTML = `Thank you ${name}. Disaster relief requires a short orientation. We will contact you soon.`;
        } else {
            responseDiv.innerHTML = `Thank you ${name}. We have received your enquiry regarding community support and will be in touch.`;
        }
        this.reset(); // Clears the form
    });
}

// Contact Form Logic (AJAX Simulation)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let responseDiv = document.getElementById('contactResponse');
        responseDiv.innerHTML = "Sending your message...";
       
        // Simulate a 1.5 second network delay
        setTimeout(() => {
            responseDiv.innerHTML = "Message sent successfully! We will reply shortly.";
            this.reset();
        }, 1500);
    });
} 
// Project Search Filter Logic
function filterProjects() {
    // Get the search input value and convert to lowercase
    let input = document.getElementById('projectSearch').value.toLowerCase();
    // Get the list of projects
    let list = document.getElementById('projectList');
    // Get all the list items inside the list
    let items = list.getElementsByTagName('li');

    // Loop through all list items, and hide those that don't match the search query
    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent || items[i].innerText;
        if (text.toLowerCase().indexOf(input) > -1) {
            items[i].style.display = ""; // Show the item
        } else {
            items[i].style.display = "none"; // Hide the item
        }
    }
} 
