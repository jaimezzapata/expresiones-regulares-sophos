let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let inputs = document.querySelectorAll("input");
// console.log(inputs)
inputs.forEach((input) => {
  input.addEventListener("keyup", validarCampos);
});

function validarCampos(e) {
  // if(e.target.value == 'f'){
  //     console.log('Holi...')
  // }
  // console.log(e)
  switch (e.target.name) {
    case "usuario":
      if (usuario.test(e.target.value)) {
        console.log("Cumple con la expresion");
        // document.getElementById('usuario').style.backgroundColor = 'green'
        document.getElementById('usuario').classList.add('correcto')
        document.getElementById('usuario').classList.remove('incorrecto')
      } else {
        console.log("No cumple con la expresion");
        // document.getElementById('usuario').style.backgroundColor = 'red'
        document.getElementById('usuario').classList.add('incorrecto')
        document.getElementById('usuario').classList.remove('correcto')
      }
      break;
    case "contrasena":
      if (contrasena.test(e.target.value)) {
        console.log("Cumple con la expresion");
        // document.getElementById('usuario').style.backgroundColor = 'green'
        document.getElementById('contrasena').classList.add('correcto')
        document.getElementById('contrasena').classList.remove('incorrecto')
      } else {
        console.log("No cumple con la expresion");
        // document.getElementById('usuario').style.backgroundColor = 'red'
        document.getElementById('contrasena').classList.add('incorrecto')
        document.getElementById('contrasena').classList.remove('correcto')
      }
      break;
    case "correo":
      if (correo.test(e.target.value)) {
        console.log("Cumple con la expresion");
        // document.getElementById('usuario').style.backgroundColor = 'green'
        document.getElementById('correo').classList.add('correcto')
        document.getElementById('correo').classList.remove('incorrecto')
      } else {
        console.log("No cumple con la expresion");
        // document.getElementById('usuario').style.backgroundColor = 'red'
        document.getElementById('correo').classList.add('incorrecto')
        document.getElementById('correo').classList.remove('correcto')
      }
      break;
  }
}

// let numeros = [1,2,3,4]
// let letras = ['A','B','C']
// let suma = [...numeros,...letras]
// console.log(suma)
