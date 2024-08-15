const translations = {
    en: {
        loginTitle: "Login",
        usernameLabel: "Username",
        passwordLabel: "Password",
        loginButton: "Login"
    },
    es: {
        loginTitle: "Iniciar sesión",
        usernameLabel: "Nombre de usuario",
        passwordLabel: "Contraseña",
        loginButton: "Iniciar sesión"
    },
    fr: {
        loginTitle: "Connexion",
        usernameLabel: "Nom d'utilisateur",
        passwordLabel: "Mot de passe",
        loginButton: "Connexion"
    }
    // Add more translations as needed
};

function setLanguage() {
    const language = document.getElementById('language').value;
    const translation = translations[language];

    document.getElementById('login-title').textContent = translation.loginTitle;
    document.getElementById('username-label').textContent = translation.usernameLabel;
    document.getElementById('password-label').textContent = translation.passwordLabel;
    document.getElementById('login-button').textContent = translation.loginButton;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function validateForm() {
    var identifier = document.getElementById("identifier").value;
    var password = document.getElementById("password").value;

    if (identifier === "" || password === "") {
        alert("Both fields are required.");
        return false;
    }

    // Simulate successful login
    sessionStorage.setItem("loggedIn", "true");
    return true;
}

