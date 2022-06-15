<template>
  <div>
    <img alt="" :src="collection.banner_image_url">
    <div v-if="assets" class="list">
      <img v-for="asset of assets" :key="asset.id" :src="asset.image_url"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import {getAssets, getCollection} from '@/service/openSea'

@Component
export default class HomePage extends Vue {
  assets = null
  collection = null

  async mounted(): Promise<void> {
    this.assets = (await getAssets()).assets
    this.collection = (await getCollection()).collection

  }
}
</script>

<style lang="scss">
</style>
