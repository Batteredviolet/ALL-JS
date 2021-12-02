let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let nombreDeUsuario = id("nombreDeUsuario"),
  email = id("correo-electrónico"),
  contrasena = id("contrasena"),
  formulario = id("formulario"),
  
  msjError = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
  console.log(msjError);

  formulario.addEventListener('submit', (e) => {
      e.preventDefault();

      motor(nombreDeUsuario, 0, 'El nombre de usuario de puede estar en blanco');
      motor(email, 1, "El correo electrónico no puede estar en blanco");
      motor(contrasena, 2, 'La contraseña no puede estar en blanco');
  });

  let motor = (id, serial, mensaje) => {
      if(id.value.trim() === ''){
        msjError[serial].innerHTML = mensaje;
        id.style.border = '2px solid red';

        //iconos
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
      }else{
        msjError[serial].innerHTML = '';
        id.style.border = '2px solid green';

        //iconos
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
      }
  };

  