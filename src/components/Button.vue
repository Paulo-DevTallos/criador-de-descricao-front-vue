<template>
  <button @click="$emit('call_form_register')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainButton",
  emits: ['call_form_register']
})
</script>

<style lang="scss" scoped>
button {
  padding: 0 20px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-size: 1rem;
  cursor: pointer;
  transition: .2s ease-in-out;
}
</style>
