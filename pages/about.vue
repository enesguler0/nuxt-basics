<template>
    <div>
        <h1>About Dad Jokes</h1>
        <p>
            Something about ... 
        </p>
    </div>
</template>

<script>
export default {
    head(){
        return{
            title: 'About the App',
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

