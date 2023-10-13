<template>
  <div>
    <h1 class="text-4xl text-center">ADD JOKES</h1>
    <div class="mt-4 border-t-4 bg-slate-600 bg-opacity-20 ">
        <input class="p-2 m-2 rounded-xl" type="text" v-model="newJoke" placeholder="Add a new Joke"
        @keypress.enter="addJoke">
        <button class="m-2 bg-green-600 rounded-lg p-2" @click="addJoke">Add</button>
    </div>
    
    <JokeAdd v-for="(joke,i) in $store.state.jokes" :key="i" :joke="joke" />
        
   
    

  </div>
  
</template>

<script>

import JokeAdd from '../components/JokeAdd.vue'
export default {
    data(){
        return {
            newJoke:"",
        }
    },components: {
        JokeAdd
    },

  head(){
        return{
            title: 'Welcome to dad jokes',
            meta: [
                {
                    hid:"description-hid",
                    name:"description-name",
                    content: "Dady jokes"
                }
            ]
        }
    },
    methods:{
        // ...mapActions(['getJokes']),
        addJoke(){
            if(this.newJoke){
                this.$store.commit('ADD_JOKE', this.newJoke)
                this.newJoke=""
            }
            
        }
    }
}
</script>