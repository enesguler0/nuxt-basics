<template>
    <div class="container">
      <AppHeader/>
      <nuxt/>
    </div>
  </template>
  
  <script>
  import AppHeader from "../components/AppHeader";
  
  export default {
    components: {
      AppHeader
    }
  };
  </script>