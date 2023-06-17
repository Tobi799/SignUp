function Password(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*_-+=';
    
    let characters = '';
    characters += uppercase;
    characters += lowercase;
    characters += numbers;
    characters += symbols;
    
   
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    
    return password;
  }
  
  
  const password = Password(10);
  console.log(password);
  