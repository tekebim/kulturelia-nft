<template>
  <div>
    <Menu />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Menu from '@/components/Menu.vue'

@Component({
  head() {
    return {
      title: `Kultura`,
      meta: [{ hid: 'description', name: 'description', content: 'Kultura' }],
    }
  },
  components: {
    Menu,
  },
})
export default class DefaultLayout extends Vue {}
</script>
