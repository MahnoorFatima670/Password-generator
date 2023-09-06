$(document).ready(function() {
    // Function to check the password strength
    function checkPasswordStrength(password) {
        // Define criteria for password strength
        var minLength = 8;
        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);
        var hasDigits = /\d/.test(password);
        var hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

        // Calculate the strength score based on criteria
        var strength = 0;
        strength += password.length >= minLength ? 1 : 0;
        strength += hasUpperCase ? 1 : 0;
        strength += hasLowerCase ? 1 : 0;
        strength += hasDigits ? 1 : 0;
        strength += hasSpecialChars ? 1 : 0;

        // Return the strength score
        return strength;
    }

    // Function to update the password strength indicator
    function updatePasswordStrengthIndicator(password) {
        var strength = checkPasswordStrength(password);
        var indicator = $("#password-strength");
        var successMessage = $("#password-success"); // New message element
    
        // Define strength levels and corresponding messages
        var levels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
        var messages = ["Password is very weak", "Password is weak", "Password is moderate", "Password is strong", "Password is very strong"];
    
        // Determine the strength level and set the corresponding message
        var levelIndex = Math.min(strength, levels.length - 1);
        var message = messages[levelIndex];
    
        // Set the indicator text and style
        indicator.text(message);
        indicator.css("color", "var(--strength-color-" + levelIndex + ")");
    
        // Display the additional message for very strong passwords
        if (levelIndex === levels.length - 1) {
            successMessage.text("Excellent ! Your password generating process is successfully completed! You can choose this password");
        } else {
            successMessage.text(""); // Clear the message if the password strength changes
        }
    }
    
    // Attach an input event listener to the password field
    $("#password").on("input", function () {
        var password = $(this).val();
        updatePasswordStrengthIndicator(password);
    });
});
