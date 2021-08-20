<template>
    <div>
        <button @click="sendJoke">make normal</button>
    </div>
</template>

<script>
    export default {
        name: "NormalJoke",
        props: {
            joke: {
                type: String,
            }
        },
        methods: {
            sendJoke: function() {
                this.$emit('emitJoke', this.makeNormalJoke());
            },
            makeNormalJoke() {
                return this.joke;
            }
        }
    }
</script>

<style scoped>

</style>