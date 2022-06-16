<template>
  <nav class="menu">
    <header class="header">
      <icon name="kulturelia" size="7" />
    </header>
    <MenuLinks />
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
  width: 360px;
  border-right: 1px solid #888888;
  height: 100vh;
}

.header {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #888888;
}
</style>
