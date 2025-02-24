document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded username and password
    if (username === "admin" && password === "password123") {
        localStorage.setItem("isAdmin", "true"); // Store login state
        window.location.href = "admin.html"; // Redirect to admin panel
    } else {
        document.getElementById("login-error").style.display = "block";
    }
});

// Redirect if already logged in
if (localStorage.getItem("isAdmin") === "true") {
    window.location.href = "admin.html";
}

// Logout function
document.getElementById("logout")?.addEventListener("click", function () {
    localStorage.removeItem("isAdmin");
    window.location.href = "login.html";
});
