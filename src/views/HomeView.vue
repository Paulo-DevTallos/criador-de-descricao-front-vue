<template>
  <div class="home-view">
    <main-header />
    <main>
      <section class="hero">
        <div class="content">
          <h1>ProDescriber, seu parceiro confiável na criação de descrições de produtos!</h1>
          <p>Crei descrições de alta qualidade e totalmente SEO-friendly para seu produto e impulsione suas vendas. Experimente já o ProDescriber, o melhor amigo do seu negócio!</p>
          <div id="demo">
            <transition name="slide-fade">
              <main-button v-if="show === false" @click="show = !show">Gerar descrição</main-button>
              <div class="base-input" v-else>
                <input type="text" placeholder="qualquer coisa">
                <main-button>Gerar descrição</main-button>
              </div>
            </transition>
          </div>
        </div>
        <!-- <div class="content content-into">
          <h1>Seu parceiro confiável na criação de descrições de produtos!</h1>
          <p>Crei descrições de alta qualidade e totalmente SEO-friendly para seu produto e impulsione suas vendas. Experimente já o ProDescriber, o melhor amigo do seu negócio!</p>
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
                <button>Gerar uma nova...</button>
              </div>
            </div>
          </div>
        </div> -->
      </section>
      <div class="list-benefits">
        <h2>O poder do GPT para omtimizar o seu negócio</h2>
        <ul>
          <li>Beneficio 1</li>
          <li>Beneficio 2</li>
          <li>Beneficio 3</li>
          <li>Beneficio 4</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import FormDescription from "../components/FormDescription.vue";
import MainHeader from "../components/MainHeader.vue";
import gptService from '../services/gpt-services';
import MainButton from "../components/Button.vue";
import loader from "@/assets/lottie-animations/loader.json";

export default defineComponent({
  components: { MainHeader, FormDescription, MainButton, Vue3Lottie },
  name: "HomeView",
  data() {
    return {
      loader,
      formLoading: false,
      show: false,
      description: {
        item_name: '',
        content: ''
      }
    }
  },
  methods: {
    alertar(value: string) {
      alert(value)
    },

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
  margin: 0 auto;
  height: 100vh;

  .hero {
    margin-top: 100px;
    min-height: 60vh;
    padding: 0 10%;

    .content {
      width: 80%;
      text-align: center;
      margin: 0 auto;

      h1 {
        font-size: 2.80rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 35px;
      }

      p {
        line-height: 1.5;
        font-size: 1.3rem;
        color: #a3a3a3;
        padding: 0 50px;
      }

      #demo {
        position: relative;
        margin: 45px 0;

        button {
          position: absolute;
          transform: translate(-50%);
        }
        /** add animation to change resource in home view */
        .slide-fade-enter-active {
          transition: all .4s ease-out;
        }

        .slide-fade-leave-active {
          transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }

        .slide-fade-enter-from,
        .slide-fade-leave-to {
          transform: translateX(20px);
          opacity: 0;
        }

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
      }
    }

    .content-into {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;


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
      border-radius: 12px;
      margin: 0 20px;
      padding: 40px;

      .loading-area {
        text-align: center;
      }

      .description {
        .item {
          margin-bottom: 20px;
        }
      }
    }
  }

  .list-benefits {
    padding: 0 10%;
    height: 50vh;
    background-color: #FCFAE1;
    color: #121212;
  }
}
</style>
