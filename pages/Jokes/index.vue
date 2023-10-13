<template>
    <div >
        <div >
            <SearchJokes @search-text="searchText" />
            <div>
            <!-- <h1>Single Joke File Showed: {{this.$store.state.storeCount.counter}}</h1> -->
            </div>
            <JokeDad v-for="joke in jokes" :key="joke.id" 
            :id="joke.id" :joke="joke.joke" @delete-joke="removeJoke"/>
        </div>
        </div>    
</template>

<script>
import axios from "axios"
import JokeDad from '../../components/JokeDad.vue'
import SearchJokes from '../../components/SearchJokes.vue'


export default {
    components: {
        JokeDad,
        SearchJokes
    },
    middleware:'authenticate',
    data(){
        return{
            jokes: []
        }
    },
    beforeMount(){
        console.log("before mount")
    },

    async asyncData({jokes,$axios, app}){
        
        const storedJokes = app.$storage.getLocalStorage('jokes');
        if (storedJokes) {
        // If jokes are found in local storage, parse and return them
            jokes=storedJokes
            return { jokes};
            } else {

            const config= {
                headers: {
                    'Accept': 'application/json',
                }
            }
            try{
                jokes = await $axios.$get('https://icanhazdadjoke.com/search', config)
                console.log(jokes.results)
                jokes=jokes.results
                app.$storage.setLocalStorage('jokes', jokes);
                // this.jokes = res.data.results;
                return {jokes}
            
                // console.log(this.jokes)
                // return this.jokes;
            
            }catch(err){
                console.log(err)
            }
        }
    },
    mounted(){
        console.log("after mount")
    },

    methods:{
        async searchText(text){
            const config= {
            headers: {
                'Accept': 'application/json',
                }
        }
        try{
            const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config);
            this.jokes = res.data.results;
            console.log(res.data)
        }catch(err){
            console.log(err)
        }
        },
        removeJoke(jokeId) {
            const indexToRemove = this.jokes.findIndex((joke) => joke.id === jokeId);
            if (indexToRemove !== -1) {
                this.jokes.splice(indexToRemove, 1);
            }
        },
    },
    head(){
        return{
            title: 'Dad Jokes',
            meta: [
                {
                    hid:"description-hid",
                    name:"description-name",
                    content: "Dady jokes"
                }
            ]
        }
    },
    setup () {
        

        return {}
    }
}
</script>