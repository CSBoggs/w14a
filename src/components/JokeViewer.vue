<template>
    <div>
        <JokeButton @reloadJoke="reloadJoke"/>
        <h1> {{ formattedJoke ? formattedJoke : joke }} </h1>
        <NormalJoke :joke="joke" @emitJoke="handleResponse"/>
        <LoudJoke :joke="joke" @emitJoke="handleResponse"/>
        <SnakeJoke :joke="joke" @emitJoke="handleResponse"/>
    </div>
</template>

<script>
import LoudJoke from './LoudJoke.vue'
import NormalJoke from './NormalJoke.vue'
import SnakeJoke from './SnakeJoke.vue'
import JokeButton from './JokeButton.vue'

    export default {
        name: "JokeViewer",
        components: {
            LoudJoke,
            NormalJoke,
            SnakeJoke,
            JokeButton,
        },
        data: () => {
            return {
                formattedJoke: null
            }
        },
        computed: {
            joke() {
                return this.$store.getters.getJoke;
            }
        },
        methods: {
            handleResponse: function(joke) {
                this.formattedJoke=joke;
            },
            reloadJoke: function() {
                this.formattedJoke = null;
                this.$store.dispatch("getNewJoke");
            }
        }
    }
</script>

<style scoped>

</style>