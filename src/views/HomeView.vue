<template>
  <div class="home-view">
    <main-header />
    <main>
      <section class="hero">
        <div class="content">
          <h1>ProDescriber, seu parceiro confiável para criação de descrições de produtos!</h1>
          <p>Crei descrições de alta qualidade e totalmente SEO-friendly para seu produto e impulsione suas vendas. Experimente já o ProDescriber, o melhor amigo do seu negócio!</p>
          <div class="row-demo-content">
            <div id="demo" v-if="showDemo">
              <transition name="slide-fade">
                <main-button v-if="show === false" @click="show = !show">Gerar descrição</main-button>
                <form-description @submitDescription="submitDescription" v-else />
              </transition>
            </div>
            <div v-else>
              <div v-if="formLoading" class="loading-area">
                <div style="margin: 30px auto; padding: 30px; width: 600px; border-radius: 8px;">
                  <loader-spinner :loader_description="'Aguarde só um pouquinho, estamos criando a melhor descrição para seu produto!'"/>
                </div>
              </div>
              <article v-else class="description">
                <p class="item">O que achou dessa ideia para o item: <strong>{{ description.item_name }}</strong></p>
                <p class="description-content">{{ description.content }}</p>
                <footer class="card-description-footer">
                  <breadcrumb-buttons
                    :buttons="breadcrumbButtons"
                    @trigged_button="triggerActions"
                  />
                </footer>
              </article>
            </div>
          </div>
        </div>
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
import FormDescription from "../components/FormDescription.vue";
import MainHeader from "../components/MainHeader.vue";
import gptService from '../services/gpt-services';
import MainButton from "../components/Button.vue";
import LoaderSpinner from "../components/Loaders/LoaderSpinner.vue";
import BreadcrumbButtons from "../components/BreadCrumbButtons/index.vue";
import type { BreadcrumbButtons as BreadcrumbTypes } from "../types/interfaces";

export default defineComponent({
  components: { MainHeader, FormDescription, MainButton, BreadcrumbButtons, LoaderSpinner },
  name: "HomeView",
  data() {
    return {
      formLoading: false,
      showDemo: true,
      show: false,
      description: {
        item_name: '',
        content: ''
      },

      breadcrumbButtons: [
        {
          label: "Salvar Descrição",
          action: "save_description"
        },
        {
          label: "Gerar Nova Descrição",
          action: "regenerate"
        },
        {
          label: "Inserir Outro Produto",
          action: "new_product"
        },
      ] as BreadcrumbTypes[],
    }
  },
  methods: {
    submitDescription(value: object) {
      this.formLoading = true;
      this.showDemo = false;

      gptService.createDescription(value)
        .then(res => {
          if (res.status === 201) {
            this.formLoading = false;

            this.description['item_name'] = res.data.description;
            this.description['content'] = res.data.response;
          }
        })
    },

    triggerActions(event: string) {
      console.log(event);
    }
  }
})
</script>

<style lang="scss" scoped>
.home-view {
  margin: 0 auto;
  height: 100vh;

  .hero {
    min-height: 40vh;
    margin: 100px 0;
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
      }

      .loading-area {
        text-align: center;
      }

      .description {
        margin: 30px;
        padding: 30px;
        border-radius: 8px;
        background: #fff;
        .item, .description-content {
          color: #121212;
          margin-bottom: 20px;
        }

        .card-description-footer {
          margin-top: 50px;
          display: flex;
          justify-content: center;
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
