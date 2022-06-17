<template>
  <div class="menu-wrapper">
    <nav class="menu">
      <TransparentButton @click="isOpen = !isOpen">
        <Icon :size="2" name="burger"/>
      </TransparentButton>
      <TransparentButton>
        <nuxt-link to="/">
          <Icon :size="2" name="kulturelia"/>
        </nuxt-link>
      </TransparentButton>
      <TransparentButton>
        <Icon :size="2" name="search"/>
      </TransparentButton>
    </nav>
    <div class="panel-container">
      <div :class="{ active: isOpen }" class="panel">
        <MenuLinks class="links"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
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
  transform: translateX(-100%);
  transition: all 1s ease-in;

  &.active {
    transform: translateX(0%);
    left: 0;
  }
}
</style>

