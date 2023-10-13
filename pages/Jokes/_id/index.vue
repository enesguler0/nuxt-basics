<template>
    <div>
        <nuxt-link to="/jokes" class="bg-slate-300 rounded-xl p-2">Back To Jokes</nuxt-link>
        <h2 class="mt-4">{{joke}}</h2>
        <hr>
        <small>Joke ID: {{$route.params.id}}</small>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                joke: {}
            }
        },
        async created(){
        const config= {
            headers: {
                'Accept': 'application/json',
                }
        }
        try{
            const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
            this.joke = res.data.joke;
            console.log(this.joke)
        }catch(err){
            console.log(err)
        }
    },
    head(){
        return{
            title: this.joke,
            meta: [
                {
                    hid:"description-hid",
                    name:"description-name",
                    content: "Dady jokes"
                }
            ]
        }
    },
}
</script>