document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // In a real application, you would send this information to a server for authentication
    // Here, we'll just compare the values for demonstration purposes
    if (username === "yourusername" && password === "yourpassword") {
        document.getElementById("message").textContent = "Login successful!";
    } else {
        document.getElementById("message").textContent = "Login failed. Please check your username and password.";
    }
});
