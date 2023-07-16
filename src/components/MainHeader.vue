<template>
  <header>
    <div class="logo-container">
      <img :src="logo" alt="Logo ProDescritpion">
    </div>
    <div>
      <button>Crie sua conta</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import logo from '@/assets/img/ProDescriber-removebg-preview.png';

export default defineComponent({
  name: "MainHeader",
  data() {
    return {
      logo,
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    width: 180px;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }
}
</style>
