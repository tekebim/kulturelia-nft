<template>
  <nav class="menu">
    <Icon name="burger" :size="2" />
    <Icon name="kulturelia" :size="2" />
    <Icon name="search" :size="2" />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MenuLinks from './Links.vue'
import Icon from '@/components/ui/Icon/index.vue'

@Component({
  components: {
    Icon,
    MenuLinks,
  },
})
export default class Menu extends Vue {}
</script>

<style lang="scss" scoped>
.menu {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
}
</style>

