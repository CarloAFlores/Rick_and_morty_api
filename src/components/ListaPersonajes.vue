<template>
  <section>
    <div class="personajes">
        <div class="personajes_item" v-for="personaje in personajes" :key="personaje.id">
            <CartaPersonajes :personaje="personaje"
            @showModal="showModal" />
        </div>
<!--         <div class="modal" :class="{'is-active':modal}" v-if="modal">
            <div class="datos">
                <p>Acerca de : {{personajeRecurrente.name}}</p>
                <img :src="personajeRecurrente.image" alt="">
                <button @click="modal=false">cerrar</button>
            </div>
        </div> -->
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from "vuex";
import CartaPersonajes from "@/components/CartaPersonajes.vue";
import axios from 'axios';
export default {
    components:{CartaPersonajes},
    data(){
        return{
            modal:false,
            personajeRecurrente:{}
        }
    },
    setup(){
        const store = useStore()
        const personajes = computed(() =>{
            return store.state.filtroPersonajes
        })
        const seleccionado = computed(() =>{
            return store.state.personajeSeleccionado
        })

        onMounted(() => {
            store.dispatch('datosPersonajes')
        })
        
        onMounted(() => {
            store.dispatch('idPersonaje')
        })
        return{
            personajes,
            seleccionado
        }
    },
/*     methods:{
        showModal(id){
            this.fetchOne(id)
        },
        async fetchOne(id){
            let result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            this.personajeRecurrente = result.data 
            this.modal = true
        }
    } */

}
</script>

<style scoped>
.personajes{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 3rem 0;
}

.modal{
  position: fixed;
  background-color: rgba(255, 235, 205, 0.69);
  width: 300px;
  height: 150px;
  margin-left: 340px;
  text-align: center;
  color: black;
}
.datos{
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.datos img{
    height: 100px;
    width: 100px;
}

</style>