<template>
  <div>
    <div v-if="assets" class="list">
      <img
        v-for="asset of formatedAssets"
        :key="asset.id"
        :src="asset.image_url"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getAssets } from '@/service/openSea'

interface Asset {
  image_url: string | null
}

const DEFAULT_IMG =
  'https://img.seadn.io/files/d67477e51780cdeaf45fd96d97b1dfa9.png?fit=max&auto=format&h=720&w=720'

@Component
export default class HomePage extends Vue {
  assets: Asset[] | null = null

  get formatedAssets(): Asset[] | null {
    if (!this.assets) return null

    const formatedAssets = [...this.assets]

    for (const asset of formatedAssets) {
      asset.image_url = asset.image_url ?? DEFAULT_IMG
    }

    return formatedAssets
  }

  async mounted(): Promise<void> {
    this.assets = (await getAssets()).assets
  }
}
</script>

<style lang="scss">
</style>
