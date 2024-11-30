 // Access the form and success message div
        const form = document.getElementById('myForm');
        const successMessage = document.getElementById('successMessage');

        // Add event listener to the form's submit event
        form.addEventListener('submit', function(event) {
            // Prevent the form from submitting the traditional way
            event.preventDefault();

            // Show the success message
            successMessage.style.display = 'block';

            // Optionally, you can reset the form after submission
            form.reset();

            // Optionally, hide the success message after 3 seconds (for better UX)
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 3000);
        });