<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 m-5">
      <div
        v-for="asset of formatedAssets"
        v-if="isCollectionLoaded"
        :key="asset.id"
        class="asset-card grid_block"
      >
        <nuxt-link :key="asset.id" :to="`/art/${asset.asset_contract.address}/${asset.token_id}`"
                   class="card-link inline-block w-full">
          <img
            :alt="asset.name"
            :src="asset.image_url"
            class="rounded-t-lg w-full h-full object-cover"
          />
          <div class="p-5">
            <h5
              class="
              card__title
              mb-2
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
              dark:text-white
            "
            >
              {{ asset.name }}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Kulturelia, Paris 13ème arrondissement
            </p>
          </div>
        </nuxt-link>
      </div>
      <div v-else class="card-loader">
        <LoaderIcon/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import {
  getAssets,
  getCollection,
  fetchLoop,
  Asset,
  Collection,
} from '~/service/openSea'

import slugify from '~/helpers/slugify'
import LoaderIcon from "~/components/ui/Icon/Loader.vue";

const DEFAULT_IMG =
  'https://img.seadn.io/files/d67477e51780cdeaf45fd96d97b1dfa9.png?fit=max&auto=format&h=720&w=720'
@Component({
  components: {LoaderIcon}
})
export default class HomePage extends Vue {
  collection: Collection | null = null
  assets: Asset[] | null = null
  isCollectionLoaded: Boolean = false;

  get formatedAssets(): Asset[] | null {
    if (!this.assets) return null

    const formatedAssets = [...this.assets]

    for (const asset of formatedAssets) {
      asset.image_url = asset.image_url ?? DEFAULT_IMG
    }

    this.isCollectionLoaded = true
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

<style lang="scss">
.card-loader {
  @apply place-self-center p-20;
}

.asset-card {
  @apply max-w-sm bg-white rounded-lg border border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700;

  .card-link {
    &:hover {
      .card__title {
        @apply underline
      }

    }

    aspect-ratio: 1/1;
  }
}
</style>
