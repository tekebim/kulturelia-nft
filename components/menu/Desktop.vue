<template>
  <nav class="menu">
    <KultureliaLogo />
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

<style lang="scss" scoped>
.menu {
  width: 30vw;
  border-right: 1px solid, grey;
  height: 100vh;
}
</style>
