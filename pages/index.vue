<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="asset of formatedAssets"
        :key="asset.id"
        class="grid_block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <nuxt-link :key="asset.id" :to="`/art/${asset.asset_contract.address}/${asset.token_id}`">
          <img
            :alt="asset.name"
            :src="asset.image_url"
            class="rounded-t-lg w-full "
          />
        </nuxt-link>
        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{asset.name}}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Kulturelia, Paris 13ème arrondissement
          </p>
        </div>
      </div>
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

import slugify from '~/helpers/slugify'

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
    return slugify(element)
  }

  async mounted(): Promise<void> {
    this.collection = await fetchLoop(getCollection)
    this.assets = await fetchLoop(getAssets)
  }
}
</script>

<style lang="scss"></style>