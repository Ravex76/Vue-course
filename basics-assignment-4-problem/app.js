const app = Vue.createApp({
    data() {
      return {
        pClass: '',
        isVisible: true,
        pColor: '#8ddba4'
      };
    },
    computed: {
        pVisible() {
            return this.isVisible ? 'visible' : 'hidden';
        }
    },
    methods: {
        setClass(event) {
            this.pClass = event.target.value; 
        },
        setColor(event) {
            this.pColor = event.target.value;
        },
        changeVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
  });
  
  app.mount('#assignment');
  