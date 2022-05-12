const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
	watch: {
  	counter(value) {
  		if (value > 50) {
  			const that = this;
  			setTimeout(function (){
  				that.counter = 0;
			  }, 2000);
		  }
	  }
	},
	computed: {
  	fullname() {
		  console.log('run again');
		  if (this.name === '') {
			  return '';
		  }
		  return this.name + ' ' + 'Ravex';
	  }
	},
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
    	this.name = '';
    }
  }
});

app.mount('#events');
