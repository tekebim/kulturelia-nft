<template>
  <button class="transparent-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TransparentButton extends Vue {}
</script>

<style lang="scss" scoped>
.transparent-button {
  background: transparent;
}
</style>
