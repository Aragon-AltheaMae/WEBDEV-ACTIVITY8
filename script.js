// Toggle Password Visibility
function togglePassword() {
    const password = document.getElementById("password");
    const slash = document.getElementById("slash");
    const eyeClosed = document.getElementById("eye-closed");

    if (password.type === "password") {
        password.type = "text";
        slash.style.display = "none"; // Remove slash
        eyeClosed.setAttribute("d", "M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"); // Open eye
    } else {
        password.type = "password";
        slash.style.display = "block"; // Show slash
        eyeClosed.setAttribute("d", "M17.94 17.94A10.06 10.06 0 01112 20c-5.52 0-10-5-10-8 0-1.01.21-1.98.6-2.85M6.06 6.06A10.06 10.06 0 0112 4c5.52 0 10 5 10 8 0 .75-.16 1.47-.45 2.15"); // Closed eye
    }
}
// Login Logic
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "omlingo" && password === "pupt") {
        window.location.href = "landing.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    }
});
