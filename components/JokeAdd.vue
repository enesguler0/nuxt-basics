<template>
	<div class="text-black " >
		
		<div class="flex justify-center items-center border-b-4 shadow-blue-700">
			<div class="text-xl font-mono p-4" >{{ joke.content }}</div>
			<button class="mr-2 bg-red-500 rounded-lg p-1" @click="removeJoke" >Delete</button>
		</div>
	</div>
</template>

<script>
    export default {
        props: ['joke'],
        methods: {
		removeJoke() {
			this.$store.commit('REMOVE_JOKE', this.joke);
		},
    },
}
</script>
