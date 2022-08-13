const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
console.log(window.location.href)
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Dylan" && password === "pika96") {
        alert("Vous êtes connecter. Redirection en cours...");
        document.location.href="torrent/torrentcreator.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "Mykeal" && password === "myk09") {
        alert("Vous êtes connecter. Redirection en cours...");
        document.location.href="torrent/torrentcreator.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})