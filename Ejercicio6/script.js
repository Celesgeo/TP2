const formulario = $("formulario");
const mensaje = $("mensaje");
const edad = $("edad");
const altura=$("altura");
const email=$("email");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  mensaje.style.color = "red";

    // Verificar campos
  if (formulario["nombre"].value === ""|| nombre.length > 50) {
    mensaje.textContent = "Nombre vacio";
    return 
  }
  else if (formulario["apellido"].value === ""|| apellido.length > 50) {
    mensaje.textContent = "Apellido vacio";
    return
  } 
  else if (formulario["edad"].value < 0) {
    mensaje.textContent = "La edad es negativa";
    return
  } 
  else if (formulario["edad"].value == "") {
    mensaje.textContent = "La edad esta vacia";
    return
  } 
  else if (formulario["edad"].value < 18) {
    mensaje.textContent = "No se puede enviar menor de edad";
    return
  } 
  else if(altura.value < 0 || altura.value > 230) {
    mensaje.textContent='La altura debe estar entre 0 y 230 cm.';
    return
  }
  else if (email.value === '' || !email.value.includes('@')) {
    mensaje.textContent='El correo electrónico no puede estar vacío y debe incluir el "@".';
    return
  }
  else {
    mensaje.textContent = "todas las validaciones son correctas";
  }
  
  mensaje.style.color = "green";
  });

function $(elemento) {
  return document.getElementById(elemento);}