<?php 
     $nombre = $_POST['name'];
     $apellido = $_POST['Surname'];
     $email = $_POST['Email'];
     $edad = $_POST['age'];
      
     if (empty($nombre)) {
         echo "El campo no puede estar vacio";
     }elseif (strlen($nombre) < 3) {
         // El nombre debe tener al menos 3 caracteres
         echo "El nombre debe tener al menos 3 caracteres";
     }if (empty($email)) {
         // El campo email está vacío, muestra un error
         echo "El campo email es obligatorio";
     } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         // El email no tiene un formato válido
         echo "El email no tiene un formato válido";
     }else {
         echo "puede ingresar";
     }if (empty($apellido)) {
         echo "El campo no puede estar vacio";
     }
?>