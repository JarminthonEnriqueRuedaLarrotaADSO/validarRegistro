addEventListener("DOMContentLoaded", (e) => {
    var nombre = document.getElementById('name');
    var apellido = document.getElementById('Surname');
    var formulario = document.getElementById('form')
    var email =document.getElementById('Email')
    var mostrar = document.getElementById('alert')

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(nombre.value.length);
        let alertas = '';
        mostrar.innerHTML = ''
        var validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        var acceder = false;
        if (nombre.value.length < 10) {
            alertas += `el nombre ${nombre.value} es demasiado corto <br>`
            acceder = true;
        }
        if (!validarEmail.test(email.value)) {
            alertas += `El email ingresado no es valido <br>`
            acceder = true;
        }
        if(apellido.value.length < 10){
            alertas += `El apellido <b>${apellido.value}</b> no es valido`
            acceder = true;
        }
        if (acceder) {
            mostrar.innerHTML = alertas
        }
        else{
            mostrar.innerHTML = `ok, enviado`
        }
    })
})