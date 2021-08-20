<template>
    <div>
        <button @click="reloadJoke">Reload Joke</button>
    </div>
</template>

<script>
    export default {
        name: "JokeButton",
        methods: {
            reloadJoke() {
                this.$emit('reloadJoke');
            }
        }
    }
</script>

<style scoped>

</style>