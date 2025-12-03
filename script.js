// Toggle Password Visibility
function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

// Handle Login Redirect
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Only allowed credentials
    if (username === "omlingo" && password === "pupt") {
        window.location.href = "landing.html"; 
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});