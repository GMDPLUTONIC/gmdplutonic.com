function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Both fields are required.");
        return false;
    }

    // Additional validation can be added here
    return true;
}

if (sessionStorage.getItem("loggedIn") !== "true" && localStorage.getItem("loggedIn") !== "true") {
    alert("You must be logged in to access this page.");
    window.location.href = "/Login/login.html"; // Redirect to login page
}