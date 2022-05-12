<template>
    <form @submit.prevent="submitted">
        <div>
            <input type="text" v-model="userName"/>
        </div>
        <div>
            <input type="number" v-model="age"/>    
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            userName: '',
            age: Number,
        }
    },
    emits: ['update-data'],
    methods: {
        submitted() {
            this.$emit('update-data', {
                userName: this.userName,
                age: this.age
            });
        }
    }
}
</script>