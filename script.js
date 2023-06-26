addEventListener("DOMContentLoaded", (e) => {


    var formulario = document.getElementById('form');
    var numFicha = document.getElementById('numeroFicha');
    var nombre = document.getElementById('Nombre');
    var apellido = document.getElementById('Apellido');
    var correo = document.getElementById('Email');
    var telefono = document.getElementById('Telefono');
    var genero = document.getElementsByName('genero');
    var select = document.getElementById('ciudad');
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="lenguaje"]');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        var cont = 0;
        checkboxes.forEach((item)=>{
            if (item.checked) {
                cont++;
            }
        })
        let Telefono = /^\d{7,14}$/ // 7 a 14 numeros.
        var validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        console.log(numFicha.value.length);
        acceder = false;
        let checkeado = false;
        for (var i = 0; i < genero.length; i++) {
            if (genero[i].checked) {
              checkeado = true;
              break;
            }
          }
        if (numFicha.value.length < 6 ){
            alert(`Ingrese un numero de Ficha Valido`)
            acceder = true
            return
        }
        if (nombre.value.length < 3 || nombre.value == null || nombre.value == ""){
            alert(`El nombre "${nombre.value}" es demasiado corto`)
            acceder = true;
            return
        }
        if(apellido.value.length < 3 || Apellido.value == null || Apellido.value == ""){
            alert(`El apellido "${apellido.value}" no es valido`)
            acceder = true;
            return
        }
        if(!validarEmail.test(correo.value)){
            alert(`El email ingresado no es valido `)
            acceder = true;
            return
        }
        if (!Telefono.test(telefono.value)) {
            alert(`Ingrese un numero de telefono`);
            acceder = true;
            return
        }
        if(!checkeado){
            alert(`Seleccione un genero`)
            return
        }
        if (select.value == "" || select.value == null) {
            alert(`selecciona una ciudad`)
            acceder = true;
            return;
        }
        if (cont < 3) {
            alert(`Ingrese un mas de 3 valores`)
            acceder = true;
            return
        }
        else{alert('enviado');}


        
    })
})