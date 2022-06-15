<template>
  <div>
    <div v-if="assets" class="list">
      <img v-for="asset of assets" :key="asset.id" :src="asset.image_url" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getAssets } from '@/service/openSea'

@Component
export default class HomePage extends Vue {
  assets = null

  async mounted(): Promise<void> {
    this.assets = (await getAssets()).assets
  }
}
</script>

<style lang="scss">
</style>
