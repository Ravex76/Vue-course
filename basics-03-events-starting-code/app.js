const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
      inc(num) {
          this.counter = this.counter + num;
      },
      dec(num) {
          this.counter = this.counter - num;
      },
      inputChange(event) {
          this.name = event.target.value;
      },
      submitForm() {
          alert('!!!!!!');
      },
      confirmInput()  {
          this.confirmedName = this.name;
      }
  }
});

app.mount('#events');
