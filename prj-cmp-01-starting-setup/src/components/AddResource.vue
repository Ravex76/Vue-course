<template>
    <base-dialog v-if="!isValid" title="Invalid input" @close="confirmError">
        <template #default>
            <P>All fields cannot be empty</P>
        </template>
        <template #actions>
            <base-button @click="confirmError">Ok</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput"/>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descInput" />
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput"/>
            </div>
            <div>
                <base-button type="submit">Submit</base-button>
            </div>                        
        </form>
    </base-card>
</template>

<script>
import BaseButton from './UI/BaseButton.vue'
import BaseCard from './UI/BaseCard.vue'
import BaseDialog from './UI/BaseDialog.vue'
export default {
  components: { BaseCard, BaseButton, BaseDialog },
  inject: ['addResource'],
  data() {
      return {
          isValid: true,
      }
  },
  methods: {
      submitData() {
        const enteredTitle = this.$refs.titleInput.value;
        const enteredDesc = this.$refs.descInput.value;
        const enteredLink = this.$refs.linkInput.value;

        if (enteredTitle === '' || enteredDesc === '' || enteredLink === '') {
            this.isValid = false;
            return;
        }

        this.addResource(enteredTitle, enteredDesc, enteredLink);
        },
      confirmError() {
        this.isValid = true;    
      }  
  },
}
</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }
</style>