function signUp(event){
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {

        localStorage.setItem('signup-username', username);
        localStorage.setItem('signup-password', password);


        document.getElementById('signup-username').value = "";
        document.getElementById('signup-password').value = "";

        alert("Sign up successful");
    } else {
        alert("PLease enter a username and password.");
    }
}

function login(event){
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedname = localStorage.getItem('username');
    const storedpass = localStorage.getItem('password');

    if (username === storedname && password) {
        alert("Login successful");
    } else {
        alert("Invalid username or password");
    }
}


document.getElementById("signup-form").addEventListener("submit", signUp)
document.getElementById("login-form").addEventListener("submit", login)