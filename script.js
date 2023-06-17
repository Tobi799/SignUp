function signUp(event){
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {

        localStorage.setItem('signup-username', username);
        localStorage.setItem('signup-password', password);


        document.getElementById('signup-username').value = "";
        document.getElementById('signup-password').value = "";
    }

}