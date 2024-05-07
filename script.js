// Función para mostrar la imagen en tamaño completo o restaurarla a su tamaño original
function toggleImageSize(image) {
    // Verificar si la imagen tiene la clase "small-image"
    if (image.classList.contains("small-image")) {
        // Cambiar la imagen a tamaño completo
        image.classList.remove("small-image");
        image.classList.add("large-image");
    } else {
        // Restaurar la imagen a su tamaño original
        image.classList.remove("large-image");
        image.classList.add("small-image");
    }
    // Obtener el elemento de audio
const buttonSound = document.getElementById('button-sound');

// Obtener todos los botones
const buttons = document.querySelectorAll('.nav-button');
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace o botón
  
      // Retrasar la acción del botón durante 2 segundos
      setTimeout(() => {
        window.location.href = button.getAttribute('href'); // Redirigir a la URL del botón después de 2 segundos
      }, 2000); // 2000 milisegundos = 2 segundos
    });
  });
// Obtener la fecha y hora actual
const now = new Date().getTime();

// Establecer la fecha y hora objetivo (mañana a la 1:30 PM)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1); // Mañana
targetDate.setHours(13); // 1 PM
targetDate.setMinutes(30); // 30 minutos

// Calcular la diferencia entre la fecha y hora actual y la fecha y hora objetivo
const difference = targetDate - now;

// Convertir la diferencia a horas, minutos y segundos
let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((difference % (1000 * 60)) / 1000);

// Mostrar el contador en el elemento HTML
const countdownElement = document.getElementById("countdown-timer");
countdownElement.innerHTML = `El servidor estará en espera hasta mañana a las ${hours} horas, ${minutes} minutos y ${seconds} segundos.`;

  
}

  

  
