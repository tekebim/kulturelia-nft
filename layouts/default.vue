<template>
  <div class="layout">
    <DesktopMenu
      v-if="windowWidth && windowWidth > 1024"
      class="desktop-menu"
    />
    <MobileMenu v-else class="mobile-menu" />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import DesktopMenu from '~/components/menu/Desktop.vue'
import MobileMenu from '~/components/menu/Mobile.vue'
import WindowSizeMixin from '@/components/utils/WindowSizeMixin'

@Component({
  head() {
    return {
      title: `Kultura`,
      meta: [
        { hid: 'description', name: 'description', content: 'Kulteralia' },
      ],
    }
  },
  components: {
    DesktopMenu,
    MobileMenu,
  },
})
export default class DefaultLayout extends WindowSizeMixin {}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;

  @media (min-width: 1024px) {
    display: flex;
  }

  .mobile-menu {
    position: sticky;
    top: 0;
  }
}
</style>>
