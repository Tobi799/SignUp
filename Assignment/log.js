
function logIn(event) {
    event.preventDefault(); 
  
    
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
   
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    
    if (username === storedUsername && password === storedPassword) {
      alert("Log in successful!");
    } else {
      alert("Invalid username or password.");
    }
  }
  
  
  document.getElementById("login-form").addEventListener("submit", logIn)
  