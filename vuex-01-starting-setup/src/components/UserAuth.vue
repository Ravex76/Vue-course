<template>
    <h2>{{ isAuth ? 'User is logged' : 'User is NOT logged'}}</h2>
    <button @click="logIn" v-if="!isAuth">Login</button>
    <button @click="logOut" v-else>Logout</button>
</template>

<script>
export default {
    methods: {
        logIn() {
            this.$store.dispatch('logIn');
        },
        logOut() {
            this.$store.dispatch('logOut');
        }        
    },
    computed: {
        isAuth() {
            return this.$store.getters.isLoggedIn;
        }
    }
}
</script>