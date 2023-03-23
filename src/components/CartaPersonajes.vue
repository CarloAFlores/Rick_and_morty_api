<template>
  <div class="personaje">
    <img :src="personaje.image" :alt="personaje.name">

    <div class="personaje_info">
       <h3>{{personaje.name}}</h3>
    </div>

    <div class="status">
        <span
        :class="
        personaje.status == 'Alive' ? 'alive':
        personaje.status == 'Dead' ? 'dead':
        'default'
        ">°
        </span>
        <br>
        <span>{{personaje.status}} - {{personaje.species}}</span>
    </div>

    <div class="origin">
        <span>
            Origen:
            {{personaje.origin.name}}
        </span>
    </div>

    <div>
        Locacion:
        {{personaje.location.name}}
    </div>
    <!-- <button @click="mostrarMas(personaje.id)" >Ver mas...</button> -->
  </div>
</template>

<script>
export default {
    props:["personaje"],
    methods:{
        mostrarMas(id){
            this.$emit("showModal",id)
        }
    }

}
</script>

<style scoped>
.personaje{
    background-color: var(--background-card);
    border-radius: 20px;
    box-shadow: 0 0 10px 1px var(--background-body);
    overflow: hidden;
    cursor: pointer;
    transition: 200ms ease-in-out;
    height: 100%;
}
h3:hover{
    color: var(--text-orange);
}

.personaje_info{
    padding: 1.5rem;
}

.alive{
    background-color: green;
}
.dead{
    background-color: red;
}
.default{
    background-color: white;
}


</style>