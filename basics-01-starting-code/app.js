const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish course Vue!',
            courseGoalB: '<h5>You are a master of Vue!</h5>',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const rndNumber = Math.random();
            if (rndNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');