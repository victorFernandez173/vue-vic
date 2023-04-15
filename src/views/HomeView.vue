<script setup></script>

<template>
  <h2 class="text-center">HOME</h2>
  <div id="idCuerpo" class="d-flex flex-column align-items-center container-md">
    <ul>
      <li>
        Proyecto vue en el que incorporo varias librerias/componentes con los
        siguientes usos:
        <ul>
          <li>
            <b>Faker</b>: generación automática de cualquier tipo de dato para
            generar los clientes iniciales en la sección JsonServer.
          </li>
          <li>
            <b>Bootstrap</b>: al final he incluido en todas las
            vistas/componentes estilos mediante bootstrap.
          </li>
          <li>
            <b>Iconos de bootstrap</b>: funcionalidad de bootstrap que hay que
            instalar aparte.
          </li>
          <li>
            <b>Simplebar</b>: barra de scroll más vistosa que la de serie (se
            puede ver en los contenedores con overflow de las secciones de
            Jsonserver y Pokemon).
          </li>
          <li>
            <b>Sweetalert2</b>: mesaje de confirmación en la página de error.
          </li>
          <li>
            <b>Json-server</b>: para trabajar con un fichero de datos propio en
            formato Json.
          </li>
          <li>
            <b>Axios</b>: para obtener datos del fichero implementando una
            funcionalidad apiREST CRUD, tanto en el fichero de datos local, como
            en la api externa de Pokemon de la sección Pokemon.
          </li>
          <li>
            <b>Vue-json-pretty</b>: para embellecer la vista del json en la
            obtención de datos de un pokemon.
          </li>
          <li>
            <b>Sass</b>: implementado en todos los bloques de estilo y además en
            "src/assets/main.scss" para algunos de los estilos globales de la
            página (paleta de colores, botones, h2).
          </li>
        </ul>
      </li>
      <li>
        Comentarios:
        <ul>
          <li>
            He intentado darle a todas las secciones un estilo continuista,
            puede apreciarse con la paleta de colores, los botones,
            formularios...
          </li>
          <li>
            El script de testeo "npm run dev" incorpora también la ejecución de
            json-server y faker.
          </li>
          <li>
            La página utiliza tres componentes vue (single file components) en
            sus diferentes vistas: el título, el navbar y la lista de tareas.
          </li>
          <li>También se utiliza vue-router.</li>
          <li>
            El navbar es responsivo y se adapta a pantallas pequeñas mediante el
            uso de "bindeo" de clases vue y una bandera booleana reactiva.
          </li>
          <li>
            En general todas las vistas incorporan algo de reactividad: la lista
            de tareas tiene dos bloques que se muestran en fila o columna según
            el viewport, lo mismo para algunos bloques en la sección de pokemon
            como el de columnas (buscar un número x de pokemones) o el tamaño y
            colocación de los formularios en general...
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="container-fluid text-center">
    <video class="col-10 col-lg-8" controls>
      <source src="../vid/Screencast.webm" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

h2 {
  background-color: map-get($mapa-colores, "azul3");
  padding: 1% 0;
}

#idCuerpo {
  margin-top: 20px;
  font-size: 1.2rem;
}
</style>
