<template>
  <div>
    <header>
      <nav class="nav">
        <a href="#" class="nav__item" @click.prevent.self> Accueil </a>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},

  data() {
    return {}
  },
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
header {
  @apply h-full shadow-lg bg-backgroundBlock-light dark:bg-backgroundBlock-dark;
}
</style>
