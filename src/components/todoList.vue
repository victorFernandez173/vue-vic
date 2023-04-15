<script setup>
import { ref, computed } from 'vue'

const escondidas = ref(false)
const contador = ref(0)
const nueva = ref('')
const listaTareas = ref([])
const listaTareasProcesada = computed(() => { return escondidas.value ? listaTareas.value.filter(t => !t.marcado) : listaTareas.value })

function insertarTarea() {
  listaTareas.value.push({ id: contador.value++, descripcion: nueva.value, marcado: false })
  nueva.value = ''
}

function borrarTarea(t) {
  listaTareas.value = listaTareas.value.filter(e => e !== t)
}
</script>

<template>
  <div id="idLista container-fluid">
    <h3 class="pt-2 text-center">Lista reactiva de tareas</h3>
    <div class="row">
      <div class="col-md-6 text-center">

        <form class="col-8 col-md-10 mx-auto" @submit.prevent="insertarTarea">
          <div class="input-group mb-3 mt-3">
            <input v-model="nueva" type="text" class="form-control" placeholder="Nueva tarea:">
            <button class="btn btn-outline-secondary">Borrar</button>
          </div>
        </form>
      </div>
      <div class="mt-4 col-md-6 text-center">
        <ul>
          <li v-for='tarea in listaTareasProcesada' :key='tarea.id' :class='{ tachado: tarea.marcado }'>
            <input type='checkbox' v-model='tarea.marcado'>
            {{
              tarea.descripcion
            }}
            <button class="btn" @click='borrarTarea(tarea)'>X</button>
          </li>
        </ul>
        <button class="btn" @click='escondidas = !escondidas'>
          {{ escondidas ? 'Mostrar todo' : 'Esconder completadas' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

* {
  margin: 0;
  padding: 0;
}

#idLista {
  background-color: map-get($mapa-colores, "azul2");
  padding: 20px;
}

h3 {
  color: map-get($mapa-colores, "azul4");
  text-decoration: underline;
  margin-bottom: 20px;
}

input[type=text] {
  color: map-get($mapa-colores, "azul5")
}

ul {
  list-style-type: none;
}

li {
  margin: 5px;
}

.tachado {
  text-decoration: line-through;
}

li:last-child {
  margin-bottom: 20px;
}
</style>