// Show/hide password
function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

// Simple form submit alert
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Account created successfully!");
});
