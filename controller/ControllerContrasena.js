let btnIniciar = document.querySelector("#btnIniciar");
btnIniciar.addEventListener("click", iniciarSesion);
function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("contrasena").value;
  let correo = document.getElementById("correo").value;
  if (usuario == "Jaime") {
    // setTimeout(function(){
    document.getElementById("bienvenide").style.display = "flex";
    // },1000)
    setTimeout(() => {
      document.getElementById("login").style.display = "none";
      document.getElementById("panel").style.display = "flex";
      document.getElementById("bienvenide").style.display = "none";
    }, 3000);
  } else {
    alert("Error de credenciales");
  }
}

let cerrarSesion = document.getElementById("cerrarSesion");
cerrarSesion.addEventListener("click", cerrandoSesion);
function cerrandoSesion() {
  document.getElementById("login").style.display = "block";
  document.getElementById("panel").style.display = "none";
}

let listar = document.querySelector("#listar");
listar.addEventListener("click", listarCosas);
function listarCosas() {
  document.getElementById("sectionListar").style.zIndex = "3";
  document.getElementById("sectionBuscar").style.zIndex = "2";
  document.getElementById("sectionFiltrar").style.zIndex = "2";
}
let buscar = document.querySelector("#buscar");
buscar.addEventListener("click", buscarCosas);
function buscarCosas() {
  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "3";
  document.getElementById("sectionFiltrar").style.zIndex = "2";
}
let filtrar = document.querySelector("#filtrar");
filtrar.addEventListener("click", filtrarCosas);
function filtrarCosas() {
  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "2";
  document.getElementById("sectionFiltrar").style.zIndex = "3";
}