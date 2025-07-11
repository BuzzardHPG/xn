document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    // Form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // Real-time validation for all fields
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
            updateSubmitButton();
        });
    });

    // Form submission handler
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            showAlert('Please fill all required fields correctly.', 'danger');
            return;
        }

        // Disable submit button during submission
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Sending...
        `;

        try {
            // Simulate form submission (replace with actual fetch/AJAX call)
            await simulateFormSubmission();
            
            // Show success message
            showAlert('Your message has been sent successfully! We will contact you soon.', 'success');
            contactForm.reset();
            contactForm.classList.remove('was-validated');
            
            // Reset all field validations
            [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
                input.classList.remove('is-invalid');
                const feedback = input.nextElementSibling;
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = '';
                }
            });
        } catch (error) {
            showAlert('There was an error sending your message. Please try again later.', 'danger');
            console.error('Form submission error:', error);
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });

    // Field validation function
    function validateField(field) {
        const value = field.value.trim();
        const feedback = field.nextElementSibling;
        
        if (field.required && value === '') {
            field.classList.add('is-invalid');
            if (feedback && feedback.classList.contains('invalid-feedback')) {
                feedback.textContent = 'This field is required';
            }
            return false;
        }
        
        if (field.type === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('is-invalid');
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = 'Please enter a valid email address';
                }
                return false;
            }
        }
        
        field.classList.remove('is-invalid');
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = '';
        }
        return true;
    }

    // Form validation function
    function validateForm() {
        let isValid = true;
        
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    // Update submit button state
    function updateSubmitButton() {
        const allValid = [nameInput, emailInput, subjectInput, messageInput].every(input => {
            return input.value.trim() !== '' && 
                  (input.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()));
        });
        
        submitBtn.disabled = !allValid;
    }

    // Show alert message
    function showAlert(message, type) {
        // Remove existing alerts
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());

        // Create new alert
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
        alertDiv.role = 'alert';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        // Insert alert
        contactForm.parentNode.insertBefore(alertDiv, contactForm.nextSibling);
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alertDiv);
            bsAlert.close();
        }, 5000);
    }

    // Simulate form submission (replace with actual API call)
    function simulateFormSubmission() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 'success' });
            }, 1500);
        });
    }

    // Initialize form validation
    updateSubmitButton();
});