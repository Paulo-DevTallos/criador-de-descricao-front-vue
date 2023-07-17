<template>
  <form @submit.prevent="$emit('submitDescription', value)">
    <h3>Insira aqui o nome do seu melhor item!</h3>
    <div class="description-generate">
      <label>Produto</label>
      <input type="text" v-model="value.description" placeholder="nome do produto">
      <p>defina um tamanho para o seu texto:...</p>
      <button type="submit">Gerar descrição</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormDescription",
  emits: ['submitDescription'],
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
form {
  height: 100%;

  h3 {
    font-size: 1.7rem;
    color: #0d0d0d;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: -1px;
  }
  .description-generate {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      color: #0d0d0d;
      font-weight: normal;
      font-size: 1.2rem;
    }

    input {
      padding: 10px;
      font-size: 1rem;
      color: #0d0d0d;
      height: 45px;
      border-radius: 8px;
      outline: none;
      border: 1px solid #dbdbdb;
      background-color: #f4f4f4;
      margin-bottom: 10px;
      transition: .2s ease-in-out;

      &:focus {
        border-color: #0d0d0d;
        background-color: #fafafa;
      }
    }

    button {
      width: 180px;
      height: 40px;
      border-radius: 12px;
      border: 1px solid #0d0d0d;
      background: #0d0d0d;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: .2s ease-in-out;

      &:hover {
        border-color: gray;
        background-color: gray;
      }

      &:active {
        background-color: #0d0d0d;
        transition: 0s;
      }
    }
  }
}
</style>
