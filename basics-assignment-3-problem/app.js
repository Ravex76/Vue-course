const app = Vue.createApp({
    data() {
      return {
        result: 0       
      };
    },
      watch: {
          result() {
              const that = this;
            setTimeout(() => {
                that.result = 0;
            }, 5000);
          }
      },
      computed: {
        resultMessage() {
            if (this.result < 37) {
                return 'Not there yet';
            } else if (this.result > 37) {
                return 'Too much!';
            }
            return '37';
        }
      },
    methods: {
        add(value) {
            this.result += value;
        }
    }
  });
  
  app.mount('#assignment');
  