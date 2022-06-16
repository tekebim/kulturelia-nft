<template>
  <div class="menu-wrapper">
    <nav class="menu">
      <TransparentButton @click="isOpen = !isOpen">
        <Icon name="burger" :size="2" />
      </TransparentButton>
      <TransparentButton>
        <Icon name="kulturelia" :size="2" />
      </TransparentButton>
      <TransparentButton>
        <Icon name="search" :size="2" />
      </TransparentButton>
    </nav>
    <div class="panel-container">
      <div class="panel" :class="{ active: isOpen }">
        <MenuLinks class="links" />
      </div>
    </div>
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
export default class MobileMenu extends Vue {
  isOpen: boolean = false
}
</script>

<style lang="scss" scoped>
.menu {
  background: white;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}

.panel-container {
  position: relative;
}

.panel {
  height: calc(100vh - 100px);
  width: 100vw;
  position: absolute;
  top: 0;
  background: white;
  left: -100%;
  &.active {
    left: 0;
  }
}
</style>

