
function signUp(event) {
    event.preventDefault(); 
  
   
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
  
    
    if (username && password) {
      
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
  
      
      document.getElementById("signup-username").value = "";
      document.getElementById("signup-password").value = "";
  
      alert("Sign up successful!");
  
     
      setTimeout(function() {
        window.location.href = "log.html";
      }, 3000);
    } else {
      alert("Please enter a username and password.");
    }
  }
  
  
  document.getElementById("signup-form").addEventListener("submit", signUp);
  