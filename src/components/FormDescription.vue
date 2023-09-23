<template>
  <form @submit.prevent="$emit('submitDescription', value)">
    <div class="base-input">
      <input v-model="value.description" type="text" placeholder="Insira seu melhor produto">
      <main-button type="submit">Gerar descrição</main-button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from '../components/Button.vue';

export default defineComponent({
  name: "FormDescription",
  emits: ['submitDescription'],
  components: { MainButton },
  data() {
    return {
      value: {
        description: '',
      }
    }
  },
})
</script>

<style lang="scss" scoped>
.base-input {
  background: #fff;
  width: 600px;
  border: 1px solid #fff;
  border-radius: 8px;
  text-align: start;
  margin: 0 auto;
  padding: 0 15px;
  height: 44px;
  position: relative;

  input {
    font-size: 1.0rem;
    border: none;
    outline: none;
    height: 100%;
    width: 73%;
  }

  button {
    background: #000;
    color: #fff;
    position: absolute;
    right: -77px;
    transform: translate(-50%, 2%);
  }
}
</style>
