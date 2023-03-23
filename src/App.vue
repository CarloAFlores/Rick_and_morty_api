<template>
  <div class="contenedor">
    <h1>Rick and Morty Vuex</h1>
    <FiltroEstado />
    <FiltroNombre />
    <ListaPersonajes />

  </div>

</template>

<script>
import FiltroEstado from "@/components/FiltroEstado.vue";
import FiltroNombre from "@/components/FiltroNombre.vue";
import ListaPersonajes from "@/components/ListaPersonajes.vue";


export default {
  name: 'App',
  components: {ListaPersonajes,FiltroEstado, FiltroNombre}
}
</script>

<style>
:root{
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white:#ffff;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
}

body{
  background-color: var(--background-body);
  color: var(--text-white);
}

h1{
  margin-bottom: 3rem;
  text-align: center;
}

.contenedor{
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}

img{
  width: 100%;
}


</style>
