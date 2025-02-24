document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Hardcoded username and password
            if (username === "admin" && password === "password123") {
                localStorage.setItem("isAdmin", "true"); // Store login state
                window.location.href = "admin.html"; // Redirect to admin panel
            } else {
                loginError.style.display = "block"; // Show error message
            }
        });
    }

    // Redirect if already logged in
    if (localStorage.getItem("isAdmin") === "true") {
        window.location.href = "admin.html";
    }

    // Logout function (if logout button exists)
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("isAdmin");
            window.location.href = "login.html";
        });
    }
});

