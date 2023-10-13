<template>
    <div  class="mt-4 p-2 border-t-4 bg-slate-600 bg-opacity-20">
        <div v-if="$store.state.auth.user">
            <button @click="logout" class="m-2 bg-red-600 rounded-lg p-2">Logout</button>
            <nuxt-link class="inline-block bg-slate-600 text-white p-2 mr-2" to="/jokes">Jokes</nuxt-link>
        </div>
        <div v-else>
        <form @submit.prevent="login">
            <label for="username" class="m-2">Username:</label>
            <input type="text" placeholder="mahmut" id="username" v-model="username" class="p-2" />
            <button type="submit" class="m-2 bg-green-600 rounded-lg p-2">Login</button>
        </form>
        
      <div v-if="loginError">{{ loginError }}</div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:'',
                loginError:"",
                isAuthenticated: false,

            }
        },
        methods:{
            login(){
                console.log("login ")
                this.$store.dispatch('auth/login', this.username)
                .then(() => {
                    this.loginError = ''; 
                    this.isAuthenticated=true;
                })
                .catch((error) => {
                    this.loginError = error.message;
                    this.isAuthenticated=false;
                });
            },
            logout() {
                this.$store.dispatch('auth/logout');
                this.isAuthenticated = false; 
            },
    }
}
</script>

