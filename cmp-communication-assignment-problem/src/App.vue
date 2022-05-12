<template>
    <active-user :user-name="userName" :age="age" />
    <user-data @update-data="updated"/>    
</template>
<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
  components: { ActiveUser, UserData },
  data() {
      return {
          userName: '',
          age: 0,
      }
  },
  methods: {
      updated(data) {
          this.userName = data.userName;
          this.age = data.age;
      },
  }
}
</script>