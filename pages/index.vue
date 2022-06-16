<template>
  <div>
    <div v-if="collection">{{ collection.stats }}</div>
    <img v-if="collection" :src="collection.banner_image_url" />
    <div v-if="assets" class="list">
      <nuxt-link v-for="asset of formatedAssets"
                 :key="asset.id" :to="`/art/${slugify(asset.name)}`">
        <img
          :alt="asset.name"
          :src="asset.image_url"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import {
  getAssets,
  getCollection,
  fetchLoop,
  Asset,
  Collection,
} from '~/service/openSea'

import slugify from "~/helpers/slugify";

interface Asset {
  image_url: string | null
  id: number
  num_sales: number
  image_preview_url: string | null
  image_thumbnail_url: string | null
  image_original_url: string | null
  name: string
}

const DEFAULT_IMG =
  'https://img.seadn.io/files/d67477e51780cdeaf45fd96d97b1dfa9.png?fit=max&auto=format&h=720&w=720'

@Component
export default class HomePage extends Vue {
  collection: Collection | null = null
  assets: Asset[] | null = null

  get formatedAssets(): Asset[] | null {
    if (!this.assets) return null

    const formatedAssets = [...this.assets]

    for (const asset of formatedAssets) {
      asset.image_url = asset.image_url ?? DEFAULT_IMG
    }

    return formatedAssets
  }

  slugify(element) {
    return slugify(element);
  }

  async mounted(): Promise<void> {
    this.collection = await fetchLoop(getCollection)
    this.assets = await fetchLoop(getAssets)
  }
}
</script>

<style lang="scss"></style>
