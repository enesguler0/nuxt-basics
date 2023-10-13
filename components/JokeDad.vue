<template>
    <div class="border border-black border-solid m-2">
        <nuxt-link :to="'jokes/' + id">
        <div class=" p-4 bg-gray-500 bg-opacity-20 ">
                <p>{{joke}}</p>
            </div>     
        </nuxt-link>
        <button @click="removeJoke" class="mr-2 bg-red-500 rounded-lg p-1" >DELETE</button>
    </div>
    
</template>

<script>
    export default {
        name: "JokeDad",
        props:[
            'joke',
            'id'
        ],
        methods: {
		removeJoke() {
			this.$emit("delete-joke", this.id);
		},
        },
    }
</script>


</style>