<template>
    <header class="flex justify-between items-center  mb-2 pb-1 border-b-2 border-dotted ">
         <h1 class="text-xl text-blue-600">Dad Jokes</h1>
         <ul class="flex">
             <li>
                 <nuxt-link class="inline-block bg-slate-600 text-white p-2 mr-2" to="/">Home</nuxt-link>
             </li>
             <li>
                 <nuxt-link class="inline-block bg-slate-600 text-white p-2 mr-2" to="/jokes">Jokes</nuxt-link>
             </li>
             <li>
                 <nuxt-link class="inline-block bg-slate-600 text-white p-2 mr-2" to="/about">About</nuxt-link>
             </li>
             <li>
                 <nuxt-link class="inline-block bg-red-600 text-white p-2 mr-2" to="/login">Login</nuxt-link>
             </li>
         </ul>
    </header>
 </template>
 
 <script>
 export default {
     name:'AppHeader',
     setup () {
         
 
         return {}
     }
 }
 </script>