<template>
  <nav class="menu">This is a dummy nav</nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Menu extends Vue {}
</script>

<style lang="scss">
.menu {
  background: grey;
  width: 100vw;
  height: 100px;
}
</style>
