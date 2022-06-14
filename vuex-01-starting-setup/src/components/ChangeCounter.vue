<template>
    <button @click="increment">Add 2</button>
    <button @click="increase({ value: 5 })">Add 5</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // add() {
        //     this.$store.dispatch('increment');
        // }
        ...mapActions('numbers', ['increment', 'increase'])
    }
}
</script>