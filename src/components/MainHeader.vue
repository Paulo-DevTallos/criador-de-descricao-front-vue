<template>
  <header>
    <div class="logo-container">
      <!--Implementar o router link para navegar para reestartar a tela-->
      <img :src="logo" alt="Logo ProDescritpion">
    </div>
    <div>
      <main-button @call_form_register="callFormRegister">
        Crie sua lista!
      </main-button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from './Button.vue';

import logo from '../assets/img/ProDescriber-removebg-preview.png';

export default defineComponent({
  name: "MainHeader",
  components: { MainButton },
  data() {
    return {
      logo,
    }
  },
  methods: {
    callFormRegister() {
      alert('Aqui vai abrir um forms')
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;

  .logo-container {
    width: 180px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #fff;

    img {
      width: 100%;
    }
  }
}
</style>
