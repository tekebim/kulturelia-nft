<template>
  
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
  @apply h-full border-solid border-b border-gray-200 bg-backgroundBlock-light dark:bg-backgroundBlock-dark;
}
</style>
