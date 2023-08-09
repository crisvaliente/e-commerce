document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Validación de campos no vacíos
      if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, ingrese usuario y contraseña.");
      } else {
        // Validación ficticia de credenciales (siempre se considera válida)
        // En una aplicación real, aquí debes realizar una validación segura en el servidor
        const validCredentials = true;
  
        if (validCredentials) {
          // Redireccionar a index.html si las credenciales son válidas
          window.location.href = "index.html";
        } else {
          alert("Credenciales incorrectas");
        }
      }
    });
  });
  