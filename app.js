document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle?.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    // Navegación activa
    const navLinks = document.querySelectorAll('.nav-link');
    
    const setActiveLink = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const targetId = section.getAttribute('id');
          
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
  
    // Evento scroll para actualizar link activo
    window.addEventListener('scroll', setActiveLink);
  
    // Click en links del menú
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    });
  });


// Validaciones del formulario  
document.addEventListener("DOMContentLoaded", () => {  
    const form = document.getElementById("contact-form");  
    const nameInput = document.getElementById("name");  
    const emailInput = document.getElementById("email");  
    const messageInput = document.getElementById("message");  
    
    const nameError = document.getElementById("name-error");  
    const emailError = document.getElementById("email-error");  
    const messageError = document.getElementById("message-error");  
  
    // Validar el campo de nombre  
    function validateName() {  
      const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;  
      if (nameRegex.test(nameInput.value.trim())) {  
        nameInput.style.backgroundColor = "lightgreen";  
        nameError.textContent = "";  
        return true;  
      } else {  
        nameInput.style.backgroundColor = "lightcoral";  
        nameError.textContent = "El nombre solo puede contener letras y espacios.";  
        return false;  
      }  
    }  
  
    // Validar el campo de correo electrónico  
    function validateEmail() {  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
      if (emailRegex.test(emailInput.value.trim())) {  
        emailInput.style.backgroundColor = "lightgreen";  
        emailError.textContent = "";  
        return true;  
      } else {  
        emailInput.style.backgroundColor = "lightcoral";  
        emailError.textContent = "Ingresa un correo electrónico válido.";  
        return false;  
      }  
    }  
  
    // Validar el campo de mensaje  
    function validateMessage() {  
      const messageRegex = /[a-zA-Z0-9.,!?ñÑáéíóúÁÉÍÓÚ\s]+/;  
      if (messageRegex.test(messageInput.value.trim()) && messageInput.value.trim() !== "") {  
        messageInput.style.backgroundColor = "lightgreen";  
        messageError.textContent = "";  
        return true;  
      } else {  
        messageInput.style.backgroundColor = "lightcoral";  
        messageError.textContent = "El mensaje debe contener letras, números o caracteres especiales.";  
        return false;  
      }  
    }  
  
    // Evento de validación en tiempo real  
    nameInput.addEventListener("input", validateName);  
    emailInput.addEventListener("input", validateEmail);  
    messageInput.addEventListener("input", validateMessage);  
  
    // Validar el formulario al enviar  
    form.addEventListener("submit", (e) => {  
      e.preventDefault(); // Prevenir el envío automático del formulario  
      const isNameValid = validateName();  
      const isEmailValid = validateEmail();  
      const isMessageValid = validateMessage();  
  
      if (isNameValid && isEmailValid && isMessageValid) {  
        // Aquí se envía el formulario a Netlify  
        const feedback = document.getElementById("form-feedback");  
        feedback.textContent = "Formulario enviado exitosamente.";  
        feedback.style.color = "green";  
        
        form.submit(); // Importante para que el formulario se envíe a Netlify  
        form.reset(); // Reiniciar el formulario  
        // Resetear colores de fondo  
        nameInput.style.backgroundColor = "";  
        emailInput.style.backgroundColor = "";  
        messageInput.style.backgroundColor = "";  
      } else {  
        document.getElementById("form-feedback").textContent = "Por favor, corrige los errores antes de enviar.";  
        feedback.style.color = "red"; // Cambiar color del mensaje a rojo para errores  
      }  
    });  
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle?.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    // Navegación activa
    const navLinks = document.querySelectorAll('.nav-link');
    
    const setActiveLink = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const targetId = section.getAttribute('id');
          
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
  
    // Evento scroll para actualizar link activo
    window.addEventListener('scroll', setActiveLink);
  
    // Click en links del menú
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    });
  });