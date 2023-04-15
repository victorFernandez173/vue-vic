<script setup>
import Swal from "sweetalert2";

window.setTimeout(alerta, 3500);

function alerta() {
  Swal.fire({
    title: "Sentimos las molestias",
    text: "Miles de años de evolución te han traido aquí pero solo la tecnología te sacará",
    confirmButtonText: "Vuelve a inicio",
    showDenyButton: true,
    denyButtonText: "No hacer nada",
    imageUrl: "src/img/bigTech.png",
    imageWidth: 400,
    imageAlt: "web banner",
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("/", "_self");
    }
  });
}

document.addEventListener("click", voltear);

let activada = false;

function voltear() {
  if (activada == false) {
    document.getElementById("idError404").className = "claseB";
    activada = true;
  } else if (activada == true) {
    document.getElementById("idError404").className = "claseA";
    activada = false;
  }
}
</script>

<template>
  <h1>UPS! PARECE QUE HA HABIDO UN PEQUEÑO CONTRATIEMPO :-(</h1>
  <div id="idImg">
    <img src="@/img/evolucion.png" alt="involucionOEvolucion" />
    <div class="imgTapa"></div>
  </div>
  <img
    id="idError404"
    class="claseA"
    src="@/img/error404.png"
    onclick="voltear()"
    alt="error.png"
  />
</template>

<style lang="scss" scoped>
body {
  background-color: rgb(240, 238, 245);
}

// MINI ANIMACIÓN

// propiedades de la imagen 404 con la animación

.claseA {
  width: 10vw;
  animation: error404 12s linear 0s infinite;
  position: fixed;
  bottom: 0;
}

.claseB {
  width: 10vw;
  animation: error404 6s linear 0s infinite;
  position: fixed;
  bottom: 0;
}

@keyframes error404 {
  0% {
    left: 0vw;
    transform: rotateY(-180deg);
  }

  25% {
    left: 47vw;
  }

  50% {
    left: 90vw;
  }

  75% {
    left: 47vw;
  }

  100% {
    left: 0vw;
  }
}

// ESTILOS GENERALES

h1 {
  font-family: "Mochiy Pop P One";
  text-align: center;
  margin-top: 3vh;
  font-size: 3vw;
}

@media only screen and (max-width: 600px) {
  h1 {
    margin-top: 7vh;
    font-size: 4vw;
  }
}

p {
  margin-top: 60vh;
}

// fuente personalizada
@font-face {
  font-family: "Mochiy Pop P One";
  font-style: normal;
  font-weight: 400;
  src: url("@/fonts/mochiy-pop-p-one-v7-latin-regular.eot");
  src: local(""),
    url("@/fonts/mochiy-pop-p-one-v7-latin-regular.woff2") format("woff2"),
    url("@/fonts/mochiy-pop-p-one-v7-latin-regular.woff") format("woff"),
    url("@/fonts/mochiy-pop-p-one-v7-latin-regular.ttf") format("truetype");
}

// PROPIEDADES Y ANIMACION(s) PRINCIPAL DE LA PAGINA DE ERROR
// declaro una variable sass que utilizo en la linea 40
$anchura: 80vw;

#idImg {
  position: absolute;
  top: 25%;
  width: $anchura;
  height: calc($anchura/2.9);
  border-radius: 5px;
  left: 5%;
  margin-left: -35%;
  overflow: hidden;
  animation: desplaza 3s;
  animation-fill-mode: forwards;
}

#idImg img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(2.3);
  animation: foto 3s;
  animation-fill-mode: forwards;
}

.imgTapa {
  width: 100%;
  height: 100%;
  background-color: rgb(225, 225, 242);
  position: absolute;
  transform: scaleX(0);
  transform-origin: 0% 50%;
  animation: tapa 3s;
}

// desplaza el contenedor padre desde la izquierda
@keyframes desplaza {
  to {
    transform: translate(50%);
  }
}

// muestra la imagen mientras se centra su contenedor y ajusta la escala a 1
@keyframes foto {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

// desplaza el div que hace de tapa en el eje X
// idea obtenida de www.css-tricks.com
@keyframes tapa {
  0% {
    transform: scaleX(0);
    transform-origin: 0% 50%;
  }

  50% {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  51% {
    transform: scaleX(1);
    transform-origin: 100% 50%;
  }

  100% {
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }
}
</style>
