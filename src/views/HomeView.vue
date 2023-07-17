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
          <div class="loading-area" v-if="formLoading">
            <vue3-lottie :animationData="loader" :speed="2" :height="200" :width="200"/>
            <p>Estamos criando a melhor descrição para você!...</p>
          </div>
          <div v-else>
            <form-description @submit-description="submitDescription" v-if="description.content === ''"/>
            <div v-else class="description">
              <p class="item">O que achou dessa ideia para o item: <strong>{{ description.item_name }}</strong></p>
              <p class="description-content">{{ description.content }}</p>
              <button>Salvar descrição</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import FormDescription from "../components/FormDescription.vue";
import MainHeader from "../components/MainHeader.vue";
import gptService from '../services/gpt-services';
import loader from "../assets/lottie-animations/loader.json";

export default defineComponent({
  components: { MainHeader, FormDescription, Vue3Lottie },
  name: "HomeView",
  data() {
    return {
      loader,
      formLoading: false,
      description: {
        item_name: '',
        content: ''
      }
    }
  },
  methods: {
    submitDescription(value: object) {
      this.formLoading = true;

      gptService.createDescription(value)
        .then(res => {
          if (res.status === 201) {
            this.formLoading = false;

            this.description['item_name'] = res.data.description;
            this.description['content'] = res.data.response;
          }
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.home-view {
  max-width: 1300px;
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
        font-size: 2.75rem;
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
      flex-direction: column;
    }
    .form-container {
      background: #f4f4f4;
      color: #0d0d0d;
      width: 100%;
      border-radius: 24px;
      margin: 0 20px;
      padding: 40px;

      .loading-area {
        text-align: center;
      }

      .description {
        .item {
          margin-bottom: 20px;
        }

        .description-content {

        }
      }
    }
  }
}
</style>
