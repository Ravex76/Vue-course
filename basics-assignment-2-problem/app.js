const app = Vue.createApp({
    data() {
        return {
            alertMsg: 'This is alert',
            inputText: '',
            confirmedText: ''
        };
    },
    methods: {
        showAlert() {
            alert(this.alertMsg);
        },
        showInput(event) {
            this.inputText = event.target.value;
        },
        showConfirmedInput(event) {
            this.confirmedText = event.target.value;
        }
    }
});
app.mount('#assignment');