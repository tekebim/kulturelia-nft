<template>
  <div class="menu-wrapper">
    <nav class="menu">
      <TransparentButton>
        <Icon name="burger" :size="2" />
      </TransparentButton>
      <TransparentButton>
        <Icon name="kulturelia" :size="2" />
      </TransparentButton>
      <TransparentButton>
        <Icon name="search" :size="2" />
      </TransparentButton>
    </nav>
    <MenuLinks class="links" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MenuLinks from './Links.vue'
import Icon from '@/components/ui/Icon/index.vue'
import TransparentButton from '@/components/ui/TransparentButton.vue'

@Component({
  components: {
    Icon,
    MenuLinks,
    TransparentButton,
  },
})
export default class Menu extends Vue {}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  position: relative;
}

.menu {
  background: white;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
}

.links {
  height: 100%;
}
</style>

