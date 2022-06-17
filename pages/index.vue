<template>
  <div>
    <div>
    </div>
    <div>
      <header>
        <nav class="nav p-5">
          <div class="grid md:grid-cols-2 ">
            <a class="nav__item brand-title cormorant col-span-1 text-5xl self-center" href="#" @click.prevent.self>KULTURELIA</a>
            <ul class="my-4 flex justify-around col-span-1">
              <!-- Nombre d'items -->
              <li class="text-center inline-block">
                <p class="text-xl font-semibold">20</p>
                <p class="text-base">Items</p>
              </li>
              <!-- Owners -->
              <li class="text-center inline-block">
                <p class="text-xl font-semibold">2,3k</p>
                <p class="text-base">Owners</p>
              </li>
              <!-- Floor price -->
              <li class="text-center inline-block">
                <p class="text-xl font-semibold">2,3</p>
                <p class="text-base">Floor price</p>
              </li>
              <!-- Total Volume -->
              <li class="text-center inline-block">
                <p class="text-xl font-semibold">2,3</p>
                <p class="text-base">Total Volume</p>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    <div>
      <div v-if="formatedAssets !== null" class="grid grid-cols-1 md:grid-cols-3 gap-8 m-5">
        <div
          v-for="asset of formatedAssets"
          :key="asset.id"
          class="
            card-link
            grid_block
            max-w-sm
            bg-white
            rounded-lg
            border border-gray-200
            shadow-md
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <nuxt-link :key="asset.id" :to="`/art/${asset.asset_contract.address}/${asset.token_id}`"
                     class=" inline-block w-full" style="aspect-ratio: 1/1">
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
      </div>
      <div v-else class="flex justify-center p-20 card-loader">
        <LoaderIcon/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import collection from '~/data/collection'
import collectionAsset from '~/data/collection-assets'
import {
  getAssets,
  getCollection,
  fetchLoop,
  Asset,
  Collection,
} from '~/service/openSea'

import slugify from '~/helpers/slugify'
import LoaderIcon from "~/components/ui/Icon/Loader.vue"

const DEFAULT_IMG =
  'https://img.seadn.io/files/d67477e51780cdeaf45fd96d97b1dfa9.png?fit=max&auto=format&h=720&w=720'

@Component({
  components: {
    LoaderIcon,
  },
})
export default class HomePage extends Vue {
  collection: any | null = collection
  assets: any | null = collectionAsset.assets

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
    // this.collection = await fetchLoop(getCollection)
    // this.assets = await fetchLoop(getAssets)
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
