<template>
    <div>
        <button @click="sendJoke">make loud</button>
    </div>
</template>

<script>
    export default {
        name: "LoudJoke",
        props: {
            joke: {
                type: String,
            }
        },
        methods: {
            sendJoke: function() {
                this.$emit('emitJoke', this.makeLoudJoke());
            },
            makeLoudJoke() {
                return this.joke.toUpperCase();
            }
        }
    }
</script>

<style scoped>

</style>