<template>
    <div>
        <button @click="sendJoke">make snake-y</button>
    </div>
</template>

<script>
    export default {
        name: "SnakeJoke",
        props: {
            joke: {
                type: String,
            }
        },
        methods: {
            sendJoke: function() {
                this.$emit('emitJoke', this.makeSnakeJoke());
            },
            makeSnakeJoke() {
                var result = this.joke.toLowerCase();
                return result.replace(/\s/g, "_");
            }
        }
    }
</script>

<style scoped>

</style>