/* ==========================================================================
   SECURE GATE CLIENT INTERCEPTOR (FORM VALIDATION)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('portfolioForm');
    if (!formElement) return;

    formElement.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop raw submission reloads
        
        let formValidationState = true;

        // Field 1 validation: Full Name
        const nameField = document.getElementById('fullName');
        const nameErrTag = document.getElementById('nameError');
        if (nameField.value.trim() === '') {
            flagTerminalError(nameField, nameErrTag);
            formValidationState = false;
        } else {
            clearTerminalError(nameField, nameErrTag);
        }

        // Field 2 validation: Precise Regex Pattern Email Matching
        const emailField = document.getElementById('email');
        const emailErrTag = document.getElementById('emailError');
        const secureEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!secureEmailRegex.test(emailField.value.trim())) {
            flagTerminalError(emailField, emailErrTag);
            formValidationState = false;
        } else {
            clearTerminalError(emailField, emailErrTag);
        }

        // Field 3 validation: Secure Password Bounds Checking
        const passwordField = document.getElementById('password');
        const passwordErrTag = document.getElementById('passwordError');
        if (passwordField.value.length < 8) {
            flagTerminalError(passwordField, passwordErrTag);
            formValidationState = false;
        } else {
            clearTerminalError(passwordField, passwordErrTag);
        }

        // Field 4 validation: Calendar Selection Existence
        const dobField = document.getElementById('dob');
        const dobErrTag = document.getElementById('dobError');
        if (dobField.value === '') {
            flagTerminalError(dobField, dobErrTag);
            formValidationState = false;
        } else {
            clearTerminalError(dobField, dobErrTag);
        }

        // Field 5 validation: Balanced Radio Option Scan
        const genderErrTag = document.getElementById('genderError');
        const genderActiveState = document.querySelector('input[name="gender"]:checked');
        if (!genderActiveState) {
            genderErrTag.style.display = 'block';
            formValidationState = false;
        } else {
            genderErrTag.style.display = 'none';
        }

        // Field 6 validation: Mandatory Biometric Attachment Selection
        const photoField = document.getElementById('photo');
        const photoErrTag = document.getElementById('photoError');
        if (photoField.files.length === 0) {
            flagTerminalError(photoField, photoErrTag);
            formValidationState = false;
        } else {
            clearTerminalError(photoField, photoErrTag);
        }

        // Field 7 validation: Required Checkbox Authentication Selection
        const termsField = document.getElementById('terms');
        const termsErrTag = document.getElementById('termsError');
        if (!termsField.checked) {
            termsErrTag.style.display = 'block';
            formValidationState = false;
        } else {
            termsErrTag.style.display = 'none';
        }

        // Action when form succeeds all requirements perfectly
        if (formValidationState) {
            alert('UPLINK SUCCESSFUL: Secure client validation metrics validated perfectly.');
            formElement.reset();
        }
    });
});

function flagTerminalError(inputNode, errorNode) {
    inputNode.style.borderColor = '#ff007f';
    errorNode.style.display = 'block';
}

function clearTerminalError(inputNode, errorNode) {
    inputNode.style.borderColor = 'rgba(0, 242, 254, 0.3)';
    errorNode.style.display = 'none';
}