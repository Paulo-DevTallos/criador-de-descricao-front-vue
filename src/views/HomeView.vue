<template>
  <div class="home-view">
    <main-header />
    <div class="container">
      <div class="content content-into">
        <h1>Seu parceiro confiável na criação de descrições de produtos!</h1>
        <p>Te ajuda a criar descrições perfeitas para o seu produto e aumentar suas vendas.</p>
      </div>
      <div class="content content-form">
        <div class="form-container">
          <form-description @submit-description="submitDescription" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormDescription from "../components/FormDescription.vue";
import MainHeader from "../components/MainHeader.vue";

export default defineComponent({
  components: { MainHeader, FormDescription },
  name: "HomeView",
  methods: {
    submitDescription(value: string) {
      console.log(value)
    }
  }
})
</script>

<style lang="scss" scoped>
.home-view {
  max-width: 85%;
  margin: 0 auto;
  height: 100vh;

  .container {
    display: flex;
    height: 80%;

    .content {
      width: 50%;
    }

    .content-into {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 35px;
      }

      p {
        line-height: 1.2;
        font-size: 1.5rem;
        padding-right: 100px;
        color: #a3a3a3;
      }
    }

    .content-form {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .form-container {
      background: #f4f4f4;
      height: 50%;
      width: 100%;
      border-radius: 24px;
      margin: 0 20px;
      padding: 40px;
    }
  }
}
</style>
