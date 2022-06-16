<template>
  <nav class="menu">
    <Icon name="burger" />
    <KultureliaLogo />
    <Icon name="search" />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import KultureliaLogo from '@/assets/logos/Kulturelia.vue'
import Icon from '@/components/ui/Icon/index.vue'

@Component({
  components: {
    KultureliaLogo,
    Icon,
  },
})
export default class Menu extends Vue {}
</script>

<style lang="scss">
.menu {
  background: grey;
  width: 100vw;
  height: 100px;
}
</style>
