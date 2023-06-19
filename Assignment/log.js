
function logIn(event) {
    event.preventDefault(); 
  
    
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
  
   
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
  
    
    if (username === storedUsername && password === storedPassword) {
      alert("Log in successful!");
    } else {
      alert("Invalid username or password.");
    }
  }
  
  
  document.getElementById("login-form").addEventListener("submit", logIn)
  