<script setup>
import {
  BIconBootstrap,
  BIconColumnsGap,
  BIconEnvelopeFill,
  BIconFiletypeJs,
  BIconFiletypeSass,
  BIconGithub,
  BIconInstagram,
  BIconLaptop,
  BIconLinkedin,
  BIconTwitter,
} from "bootstrap-icons-vue";
</script>

<template>
  <!-- SECCION PRINCIPAL -->
  <section class="hero align-items-stretch">
    <div
      class="hero-principal d-flex flex-column align-items-center justify-content-center"
    >
      <img
        class="hero-imagen-desarrollador rounded-circle"
        src="@/img/vic.jpg"
        alt="foto personal perfil"
      />
      <h1>Hola, soy Víctor Fernández</h1>
      <h3>Desarrollador junior fullstack</h3>
    </div>
    <div class="hero-inferior">
      <img
        class="hero-inferior-imagen img-fluid"
        src="@/img/computer-and-house-svgrepo-com.svg"
        alt="imagen laptop"
      />
    </div>
  </section>

  <!-- SOBRE MI -->
  <section id="sobre-mi" class="sobre-mi seccion-oscura">
    <div class="contenedor">
      <h3 class="seccion-titulo texto-blanco">Conoce a Víctor</h3>
      <p class="seccion-texto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </section>

  <!-- EXPERIENCIA PERSONAL -->
  <section id="experiencia" class="experiencia seccion-clara">
    <div class="container text-center">
      <div class="row">
        <!-- DESARROLLO WEB -->
        <div class="columna col-12 col-md-4">
          <BIconLaptop class="display-6" />
          <p class="experiencia-titulo">Desarrollo Web</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div class="badges-contenedor">
            <span class="badge text-bg-primary">HTML</span>
            <span class="badge text-bg-primary">CSS</span>
            <span class="badge text-bg-primary">JS</span>
          </div>
        </div>
        <!-- ARTÍCULOS -->
        <div class="columna col-12 col-md-4">
          <BIconLaptop class="display-6" />
          <p class="experiencia-titulo">Artículos</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div class="badges-contenedor">
            <span class="badge text-bg-primary">Escribir</span>
            <span class="badge text-bg-primary">Editar</span>
            <span class="badge text-bg-primary">Blogs</span>
          </div>
        </div>
        <!-- ESTUDIANTE -->
        <div class="columna col-12 col-md-4">
          <BIconLaptop class="display-6" />
          <p class="experiencia-titulo">Estudios</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div class="badges-contenedor">
            <span class="badge text-bg-primary">Java</span>
            <span class="badge text-bg-primary">Spring</span>
            <span class="badge text-bg-primary">Vue</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROYECTOS -->
  <section
    id="proyectos"
    class="proyectos-recientes seccion-clara d-flex flex-column text-center"
  >
    <h3 class="seccion-titulo texto-negro">Mis proyectos recientes</h3>
    <h3 class="seccion-descripcion">
      Estos son algunos proyectos que he creado recientemente
    </h3>
    <!-- Galeria de proyectos -->
    <div class="container proyectos-contenedor">
      <div class="row">
        <!-- Proyecto 1 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="@/img/proyecto1.png" alt="proyecto 1" />
            <div class="overlay">
              <p>Proyecto 1</p>
              <div class="iconos-contenedor">
                <a
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="idVueImg"
                    src="../img/vue-svgrepo-com.svg"
                    alt="icon vue"
                  />
                </a>
                <a
                  href="https://github.com/victorFernandez173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconLaptop class="display-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Proyecto 2 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="@/img/proyecto2.png" alt="proyecto 1" />
            <div class="overlay">
              <p>Proyecto 2</p>
              <div class="iconos-contenedor">
                <a
                  href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconColumnsGap class="classIco display-6" />
                </a>
                <a
                  href="https://github.com/victorFernandez173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconLaptop class="display-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Proyecto 3 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="@/img/proyecto3.png" alt="proyecto 1" />
            <div class="overlay">
              <p>Proyecto 3</p>
              <div class="iconos-contenedor text-centered">
                <a
                  href="https://sass-lang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconFiletypeSass class="classIco display-5" />
                </a>
                <a
                  href="https://github.com/victorFernandez173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconLaptop class="display-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Proyecto 4 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="@/img/proyecto4.png" alt="proyecto 1" />
            <div class="overlay">
              <p>Proyecto 4</p>
              <div class="iconos-contenedor">
                <a
                  href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconFiletypeJs class="classIco display-6" />
                </a>
                <a
                  href="https://github.com/victorFernandez173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconLaptop class="display-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Proyecto 5 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="@/img/proyecto5.png" alt="proyecto 1" />
            <div class="overlay">
              <p>Proyecto 5</p>
              <div class="iconos-contenedor">
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconBootstrap class="classIco display-6" />
                </a>
                <a
                  href="https://github.com/victorFernandez173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconLaptop class="display-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Proyecto 6 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="proyecto">
            <img src="@/img/proyecto6.png" alt="proyecto 1" />
            <div class="overlay">
              <p>Proyecto 6</p>
              <div class="iconos-contenedor">
                <a
                  href="https://www.w3schools.com/js/js_validation.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconUiChecks class="classIco display-6" />
                </a>
                <a
                  href="https://github.com/victorFernandez173"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BIconLaptop class="display-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="https://github.com/victorFernandez173"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button" class="btn btn-info">
        Ver más proyectos
        <BIconArrowRightCircleFill />
      </button>
    </a>
  </section>

  <!-- ARTICULOS -->
  <section
    id="articulos"
    class="articulos d-flex flex-column align-items-center"
  >
    <h3 class="seccion-titulo texto-negro">Artículos</h3>
    <div class="card">
      <div class="card-header">Más recientes</div>
      <ul class="list-group list-group-flush">
        <a
          href="https://www.freecodecamp.org/news/how-to-use-mysql-transactions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="list-group-item">Transacciones con mySql para novatos</li>
        </a>
        <a
          href="https://www.freecodecamp.org/news/javascript-modulo-operator-how-to-use-the-modulus-in-js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="list-group-item">Operador módulo en JS</li>
        </a>
        <a
          href="https://www.freecodecamp.org/news/set-and-map-in-javascript/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="list-group-item">Usando Set y Map en JS</li>
        </a>
        <a
          href="https://www.freecodecamp.org/news/how-to-search-files-in-the-linux-terminal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="list-group-item">Buscando ficheros en linux con bash</li>
        </a>
        <a
          href="https://www.freecodecamp.org/news/learn-git-and-github-in-spanish-course-for-beginners/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="list-group-item">Aprende Git y GitHub en Español</li>
        </a>
        <a
          href="https://www.freecodecamp.org/news/objects-in-javascript/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="list-group-item">Objetos en JS</li>
        </a>
      </ul>
    </div>

    <a
      href="https://www.freecodecamp.org/news/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button" class="btn btn-info">
        Ver más artículos
        <BIconArrowRightCircleFill />
      </button>
    </a>
  </section>

  <!-- TESTIMONIOS -->
  <section
    id="testimonios"
    class="testimonios seccion-clara d-flex flex-column align-items-center"
  >
    <h3 class="seccion-titulo">Testimonios</h3>
    <h3 class="seccion-descripcion">Testimonios variados de clientes</h3>

    <!-- TESTIMONIOS-CARRUSEL -->
    <div
      id="testimonios-carrusel"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <img
              class="testimonio-imagen rounded-circle"
              src="@/img/cliente1.png"
              alt="cliente 1"
            />
            <p class="testimonio-texto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div class="testimonio-info">
              <p class="cliente">Alicia</p>
              <p class="cargo">Ex Machina</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <img
              class="testimonio-imagen rounded-circle"
              src="@/img/cliente2.png"
              alt="cliente 2"
            />
            <p class="testimonio-texto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div class="testimonio-info">
              <p class="cliente">Monica</p>
              <p class="cargo">La pasión de Cristo</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <img
              class="testimonio-imagen rounded-circle"
              src="@/img/cliente3.png"
              alt="cliente 3"
            />
            <p class="testimonio-texto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div class="testimonio-info">
              <p class="cliente">Naomi</p>
              <p class="cargo">McQueen</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#testimonios-carrusel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#testimonios-carrusel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <!-- CONTACTO -->
  <section id="contacto" class="contacto seccion-oscura">
    <div class="container">
      <div
        class="container text-center d-flex justify-content-evenly rectangulo"
      >
        <div class="row">
          <div class="col-12 col-md-4 seccion-titulo">¡Hablemos!</div>
          <div class="col-12 col-md-4 descripcion">
            Contáctame para iniciar tu proyecto de desarrollo web
          </div>
          <div class="col-12 col-md-4">
            <a href="mailto:victor.fer.gor@gmail.com">
              <button type="button">
                Contacto <i class="bi bi-envelope-at"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer
    class="seccion-oscura d-flex flex-column align-items-center justify-content-center"
  >
    <img src="@/img/apple.svg" alt="logo" class="footer-logo" />
    <p class="footer-texto text-center">
      Creador incombustible. <br />
      Aprendo y creo todos los días
    </p>
    <div
      class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center"
    >
      <a
        href="https://twitter.com/w3schoolsonline"
        target="_blank"
        ref="noopener noreferrer"
      >
        <BIconTwitter />
      </a>
      <a
        href="https://github.com/victorFernandez173"
        target="_blank"
        ref="noopener noreferrer"
      >
        <BIconGithub />
      </a>
      <a
        href="https://www.instagram.com/w3schools.com_official/?hl=es"
        target="_blank"
        ref="noopener noreferrer"
      >
        <BIconInstagram />
      </a>
      <a
        href="https://es.linkedin.com/"
        target="_blank"
        ref="noopener noreferrer"
      >
        <BIconLinkedin />
      </a>
      <a
        href="mailto:victor.fer.gor@gmail.com"
        target="_blank"
        ref="noopener noreferrer"
      >
        <BIconEnvelopeFill />
      </a>
    </div>
    <div class="derechos-de-autor">
      Creado por Víctor Fernández (2023) &#169;
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

/* ESTILOS GENERALES */
.classIco {
  margin: 10px;
}

.seccion-oscura {
  color: white;
  background-color: map-get($mapa-colores, "azul4");
}

.seccion-clara {
  color: black;
  background-color: map-get($mapa-colores, "azul1");
}

.seccion-descripcion {
  font-size: 1.2rem;
  color: #584e4e;
}

.seccion-texto {
  font-size: 1 rem;
}

.btn-info {
  font-size: 1.1rem;
  margin: 20px;
}

/* SECCION PRINCIPAL */
.hero {
  background-color: map-get($mapa-colores, "azul1");
  min-height: 450px;
  text-align: center;
}

.hero-principal {
  padding: 1rem;
}

.hero-imagen-desarrollador {
  width: 300px;
  height: 300px;
  margin-bottom: 1rem;
}

/* SOBRE MI */
.sobre-mi {
  padding: 10px;
}

.sobre-mi .contenedor {
  margin: auto;
  max-width: 600px;
  text-align: center;
  padding: 15px 0;
}

.hero-inferior-imagen {
  margin: -75px 0 -60px 0;
}

/* EXPERIENCIA */
.experiencia {
  padding: 40px;
}

.experiencia .columna {
  padding: 20px;
  border: 2px solid #8080804d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.2s ease-in;
}

.experiencia .columna:hover {
  color: white;
  background-color: map-get($mapa-colores, "azul5");
}

.experiencia i {
  font-size: 2.2rem;
  color: #7ade30;
  background-color: map-get($mapa-colores, "azul5");
  padding: 8px 19px;
  border-radius: 48%;
}

.experiencia-titulo {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
}

.badge {
  margin: 5px;
}

/* PROYECTOS */
#proyectos {
  background-color: white;
}

.proyectos-recientes {
  padding: 40px;
}

.proyectos-recientes img {
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.proyectos-contenedor {
  padding-top: 60px;
  margin-bottom: 40px;
}

.overlay {
  transition: all 0.2s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay p {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 15px;
}

.overlay img {
  width: 60px;
  margin: 10px;
}

.overlay i {
  color: black;
  font-size: 60px;
  margin: 5px;
}

.proyecto:hover img {
  opacity: 0.2;
}

.proyecto:hover .overlay {
  opacity: 1;
}

.proyecto {
  position: relative;
}

#idVueImg {
  opacity: 1;
}

/* ARTICULOS */
.articulos {
  min-height: 500px;
  padding: 20px;
}

.articulos .card {
  width: 80%;
  max-width: 600px;
  margin: 20px;
}

.articulos .card-header {
  font-weight: bold;
}

/* TESTIMONIOS */
#testimonios {
  background-color: white;

  button {
    background-color: white;
  }
}

.testimonios {
  padding: 40px 40px 80px 40px;
}

.testimonios .carousel {
  max-width: 800px;
}

.carousel-item {
  height: 500px;
}

.carousel-item .container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.testimonio-imagen {
  width: 150px;
  height: 150px;
  margin: 10px 10px 20px 10px;
}

.testimonio-texto {
  max-width: 70%;
  font-size: 20px;
  text-align: center;
}

.testimonio-info {
  font-weight: bold;
  text-align: center;
}

.testimonio-info p {
  margin-bottom: 0;
}

.testimonio-info cliente {
  font-size: 1.2rem;
}

.testimonio-info .cargo {
  font-size: 0.9rem;
  color: #656060;
}

/* CONTACTO */
.contacto .container {
  max-width: 1100px;
  min-height: 150px;
  padding: 30px;
}

.contacto .rectangulo {
  margin-top: -6rem;
  background-color: map-get($mapa-colores, "azul3");
  border-radius: 10px;
}

.contacto .rectangulo:hover {
  border: 3 px solid black;
}

.contacto .row {
  width: 100%;
  display: flex;
  align-items: center;
}

.contacto .descripcion {
  color: white;
  font-size: 1.2rem;
}

.contacto button {
  color: white;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid white;
  padding: 1.25em 2em;
  margin: 10px;
  border-radius: 100px;
  transition: all 0.2s ease-in-out;
}

.contacto button i {
  color: white;
  font-size: 1.3rem;
  transition: all 0.2s ease-in-out;
}

.contacto button:hover {
  background-color: map-get($mapa-colores, "azul1");
  color: map-get($mapa-colores, "azul5");
}

.contacto button:hover i {
  color: black;
}

/* FOOTER */
footer {
  min-height: 300px;
}

.footer-logo {
  height: 80px;
  width: 80px;
  margin: 0px;
  color: map-get($mapa-colores, "azul1");
}

.footer-texto {
  font-size: 1.2rem;
  padding: 20px;
  margin-bottom: 20px;
}

.iconos-redes-sociales a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin: 10px;
  border: 2px solid white;
  border-radius: 50%;
  transition: all 0.2s ease-in;
  color: white;
}

.iconos-redes-sociales {
  font-size: 1.2rem;
  transition: all 0.2s ease-in;
}

.iconos-redes-sociales a:hover {
  background-color: white;
  border: 2px solid map-get($mapa-colores, "azul3");
  color: map-get($mapa-colores, "azul4");
}

.derechos-de-autor {
  font-size: 15px;
  color: #aeaeae;
  padding: 20px;
}

/* RESPONSIVE */

@media screen and (max-width: 400px) {
  .overlay p {
    font-size: 18px;
  }

  .overlay i {
    font-size: 40px;
  }
}

@media screen and (min-width: 401px) and (max-width: 600px) {
  .navbar-brand {
    display: none;
  }

  .overlay p {
    font-size: 20px;
  }

  .overlay i {
    font-size: 50px;
  }
}

@media screen and (max-width: 600px) {
  .navbar-brand {
    display: none;
  }
}

@media screen and (min-width: 700px) {
  .hero-inferior-imagen {
    max-width: 600px;
  }
}

@media screen and (max-width: 800px) {
  .testimonio-imagen {
    height: 120px;
    width: 120px;
  }

  .testimonio-texto {
    font-size: 18px;
  }
}
</style>
