<template>
    <div class="my-4 ">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="text" placeholder="Search Jokes..." class="border border-solid text-black p-2">
            <input type="submit" value="Search Jokes" class="border rounded-xl p-2 hover:cursor-pointer bg-slate-500">
        </form>
        
    </div>
    

</template>

<script>
export default {
    name: 'SearchJokes',
    data(){
        return {
            text:'',
        }
    },
    methods:{
        onSubmit(){
            this.$emit('search-text', this.text);
            this.text=""
        }
    }
    
}
</script>