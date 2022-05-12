const app = Vue.createApp({
    data() {
        return {
            name: 'Aleksandr',
            age: 45,
        };
    },
    methods: {
        age5() {
            return this.age + 5;
        },
        favoriteRnd() {
            return Math.random();
        }
    }
});
app.mount('#assignment');