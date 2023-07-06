// Obtenemos del DOM el botón de Inciar Sesión

iniciarSesion = document.getElementById('iniciar-sesion');


// Creamos un Evento Click y una Función

iniciarSesion.addEventListener('click', function(event){

    // Para que no recargue la página al hacer click en el botón
    event.preventDefault();

    // Variables que vamos a necesitar para la validación
    let usuario = document.getElementById('nombre-de-usuario').value;
    let contraseña = document.getElementById('password').value;

    // Validación
    if (usuario == "joshep.rivera" && contraseña == "202212840") {
        window.location.replace("prototipo1.html");
    } else {
        // Obtenemos del DOM el párrafo y le agregamos texto
        error = document.getElementById("error");
        error.textContent = "Usuario y/o contraseña incorrecta";
        error.classList.add("error")
        setTimeout(function ocultarError(){
            error.textContent = "";
            error.classList.remove("error")
        }, 3000)
    }
})