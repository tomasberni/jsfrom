/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let form = document.getElementById("formulario");

  function enviarDatos(e) {
    e.preventDefault();
    console.log("funciona");

    let alertMessage = document.getElementById("alertMessage");
    let tarjetaCredito = document.getElementById("tarjetaCredito");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let ciudad = document.getElementById("ciudad");
    let departamento = document.getElementById("departamento");
    let codigoPostal = document.getElementById("codigoPostal");
    let grupoInput = document.getElementById("departamento");
    let mensaje = document.getElementById("mensaje");
    //tarj
    if (grupoInput.value == "Seleccionar" || grupoInput.value == "") {
      grupoInput.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (tarjetaCredito.value === null || tarjetaCredito.value === "") {
      tarjetaCredito.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (cvc.value === null || cvc.value === "") {
      cvc.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (amount.value === null || amount.value === "") {
      amount.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (nombre.value === null || nombre.value === "") {
      nombre.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (apellido.value === null || apellido.value === "") {
      apellido.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (ciudad.value === null || ciudad.value === "") {
      ciudad.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (departamento.value === null || departamento.value === "") {
      departamento.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (codigoPostal.value === null || codigoPostal.value === "") {
      codigoPostal.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (mensaje.value === null || mensaje.value === "") {
      mensaje.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }
  }
  form.addEventListener("submit", enviarDatos);
};
