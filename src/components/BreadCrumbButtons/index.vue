<template>
  <div class="breadcrumb-buttons">
    <main-button
      v-for="(button, index) in buttons"
      :key="index"
      @click="$emit('trigged_button', button.action)"
    >
      {{ button.label }}
    </main-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../Button.vue";
import type { BreadcrumbButtons } from "../../types/interfaces";

export default defineComponent({
  name: "BreadcrumbButtons",
  components: { MainButton },
  props: {
    buttons: { type: Array as () => BreadcrumbButtons[] }
  },
  emits: ['trigged_button'],
});
</script>

<style lang="scss" scoped>
.breadcrumb-buttons {
  display: flex;
  gap: 10px;
}
</style>
