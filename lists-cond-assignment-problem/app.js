const app = Vue.createApp({
    data() {
        return {
            addedTask: '',
            tasks: [],
            isVisible: true
        };
    },
    methods: {
        addTask() {
            if (this.addedTask) {
                this.tasks.push(this.addedTask);
            }
        },
        changeVisible() {
            this.isVisible = !this.isVisible;
        }
    }
  });
  
  app.mount('#assignment');