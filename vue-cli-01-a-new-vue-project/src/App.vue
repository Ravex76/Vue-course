<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
          name="Alex"
          phoneNumber="8927734334"
          emailAddress="alex@alex.ru"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          {
            id: 'alex',
            name: 'Alexander',
            phone: '8927734334',
            email: 'alex@alex.ru'
          },
          {
            id: 'elena',
            name: 'Elena',
            phone: '8726734123',
            email: 'elena@elena.ru'
          },
        ]
      };
    }
  };
</script>
