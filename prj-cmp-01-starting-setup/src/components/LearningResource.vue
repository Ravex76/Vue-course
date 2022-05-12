<template>
    <base-card>
        <li>
            <div>
                <header>
                    <h3> {{ title }} </h3>
                    <base-button mode="flat" @click="removeResource(id)">Delete</base-button>
                </header>
            </div>
        </li>
        <p> {{ description }}</p>
        <a :href="link">View resource</a>
    </base-card>
</template>

<script>
import BaseButton from './UI/BaseButton.vue'

export default {
  components: { BaseButton },
    props: ['id', 'title', 'link', 'description'],
    inject: ['removeResource']
}
</script>

<style scoped>
    li {
            margin: auto;
            max-width: 40rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
    }

    p {
        margin: 0.5rem 0;
    }

    a {
        text-decoration: none;
        color: #ce5c00;
    }

    a:hover,
    a:active {
        color: #c89300;
    }
</style>    