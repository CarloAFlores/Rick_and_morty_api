import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    personajes:[],
    filtroPersonajes:[],
    personajeSeleccionado:{}
  },
  getters: {
  },
  mutations: {
    enviarPersonaje(state,payload){
      state.personajes=payload
    },
    enivarFiltroPersonaje(state,payload){
      state.filtroPersonajes=payload
    },
    enviarSeleccionado(state,payload){
      state.personajeSeleccionado=payload
    }
  },
  actions: {
    async datosPersonajes({commit}) {
      try {
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        const {results} = data
        console.log(results)
        commit('enviarPersonaje', results)
        commit('enivarFiltroPersonaje',results)
      } catch (error) {
        console.log(error)
        
      }
    },
    filtroEstado({commit,state},status){
      const resultado = state.personajes.filter((personaje)=>{
        return personaje.status.includes(status)
      })
      commit('enivarFiltroPersonaje',resultado)

    },

    filtroNombre({commit,state},name){
      console.log(name)
      const formaNombre = name.toLowerCase()
      const resultado = state.personajes.filter((personaje)=>{
        const personajeNombre = personaje.name.toLowerCase()
        if(personajeNombre.includes(formaNombre)){
          return personaje
        }
      })
      commit('enivarFiltroPersonaje',resultado)
    },
/*     async idPersonaje({commit}){
      try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const {results} = data
        console.log(results)
        commit('enviarSeleccionado', results)
      } catch (error) {
        console.log(error)
        
      }
    } */

  },
  modules: {
  }
})
