import { contrasenas } from "../model/ModelContrasena.js";

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
  document.getElementById("sectionListar").innerHTML = "";
  document.getElementById("sectionListar").style.zIndex = "3";
  document.getElementById("sectionBuscar").style.zIndex = "2";
  document.getElementById("sectionFiltrar").style.zIndex = "2";
  document.getElementById("sectionCrear").style.zIndex = "2";
  contrasenas.map((contrasena) => {
    let sectionListar = document.getElementById("sectionListar");
    let card = document.createElement("article");
    let nombre = document.createElement("h1");
    let url = document.createElement("a");
    let usuario = document.createElement("p");
    let contarsena = document.createElement("p");
    let descripcion = document.createElement("p");
    nombre.textContent = contrasena.sitioWeb;
    url.textContent = contrasena.sitioWeb;
    url.href = contrasena.urlWeb;
    url.target = "_blank";
    usuario.textContent = contrasena.usuario;
    contarsena.textContent = contrasena.password;
    descripcion.textContent = contrasena.descripcion;
    card.classList.add("listadoCosas");
    card.append(nombre, url, usuario, contarsena, descripcion);
    console.log(card);
    sectionListar.append(card);
  });
}

let buscar = document.querySelector("#buscar");
buscar.addEventListener("click", buscarCosas);
function buscarCosas() {
  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "3";
  document.getElementById("sectionFiltrar").style.zIndex = "2";
  document.getElementById("sectionCrear").style.zIndex = "2";
  let btnBuscar = document.getElementById("btnBuscar");
  btnBuscar.addEventListener("click", () => {
    let buscarItem = document.getElementById("buscarItem").value;
    contrasenas.find((contrasena) => {
      if (buscarItem == contrasena.id) {
        let sectionBuscar = document.getElementById("sectionBuscar");
        let card = document.createElement("article");
        let nombre = document.createElement("h1");
        let url = document.createElement("a");
        let usuario = document.createElement("p");
        let contarsena = document.createElement("p");
        let descripcion = document.createElement("p");
        nombre.textContent = contrasena.sitioWeb;
        url.textContent = contrasena.sitioWeb;
        url.href = contrasena.urlWeb;
        url.target = "_blank";
        usuario.textContent = contrasena.usuario;
        contarsena.textContent = contrasena.password;
        descripcion.textContent = contrasena.descripcion;
        card.classList.add("listadoCosas");
        card.append(nombre, url, usuario, contarsena, descripcion);
        console.log(card);
        sectionBuscar.append(card);
      }
    });
  });
}

let filtrar = document.querySelector("#filtrar");
filtrar.addEventListener("click", filtrarCosas);
function filtrarCosas() {
  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "2";
  document.getElementById("sectionFiltrar").style.zIndex = "3";
  document.getElementById("sectionCrear").style.zIndex = "2";
}

let crear = document.querySelector("#crear");
crear.addEventListener("click", crearCosa);
function crearCosa() {
  document.getElementById("sectionListar").style.zIndex = "2";
  document.getElementById("sectionBuscar").style.zIndex = "2";
  document.getElementById("sectionFiltrar").style.zIndex = "2";
  document.getElementById("sectionCrear").style.zIndex = "3";
}
let btnCrear = document.getElementById("btnCrear");
btnCrear.addEventListener("click", () => {
  let sitioWeb = document.getElementById("nombreSitio").value;
  let urlWeb = document.getElementById("urlSitio").value;
  let password = document.getElementById("contrasenaSitio").value;
  let usuario = document.getElementById("usuarioSitio").value;
  let descripcion = document.getElementById("descripcionSitio").value;
  let id = document.getElementById("idSitio").value;
  let contraseña = { sitioWeb, urlWeb, password, usuario, descripcion, id };
  contrasenas.push(contraseña);
});
