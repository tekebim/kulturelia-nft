<template>
  <!-- yarn add --dev @nuxtjs/google-fonts -->

  <div>
    <div v-if="asset" class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 m-4 mt-16">
      <div class="grid_block mt-auto mb-auto">
        <img
          :src="asset.image_preview_url"
          alt=""
          class="w-full"
        />
      </div>
      <div class="grid_block grid content-center">
        <h2 class="font-bold text-4xl cormorant capitalize">
          {{ asset.collection.name }}
        </h2>
        <span class="trace"></span>
        <p class="text-3xl cormorant mb-2">{{ asset.name }}</p>
        <div class="grid grid-flow-col w-max gap-3 mb-2">
          <p class="text-lg inline-block">2018</p>
          <span class="border bg-green-50 border-green-400 text-green-400 rounded-xl px-2 py-1 text-xs inline-block">Disponible</span>
        </div>
        <p class="text-sm mb-2">35cm x 35cm x 30cm (14" x 14" x 12")</p>
        <div class="grid grid-flow-col w-max place-items-center gap-3 my-9">
          <img
            alt="ethereum"
            class="h-12 inline-block"
            src="/img/ethereum_logo.png"
          />
          <p class="text-3xl font-semibold inline-block">0,2 eth</p>
        </div>
        <div>
          <a :href="asset.permalink" class="btn" target="_blank">Cette oeuvre m'interese</a>
        </div>
      </div>
      <div class="grid_block">
        <h3 class="h3">Description</h3>
        <span class="trace"></span>
        <!-- Description -->
        <p>
          {{ asset.description }}
        </p>
      </div>
      <div class="grid_block">
        <h3 class="h3">Artistes</h3>
        <span class="trace"></span>
        <div>
          <!-- Profil de l'artiste -->
          <img
            :src="asset.creator.profile_img_url"
            alt=""
            class="rounded-full h-12 w-12 inline-block mr-4"
          />
          <!-- Nom de l'artiste -->
          <p class="inline-block">Nom de l’artiste</p>
        </div>

        <ul class="my-4 flex justify-around">
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
      <div class="grid_block">
        <h3 class="h3">Properties</h3>
        <span class="trace"></span>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Propriété -->
          <div class="border text-center mt-2 p-4">
            <p class="text-xl font-semibold mb-4">Background</p>
            <p class="text-xl">Multicolor</p>
          </div>

          <div class="border text-center mt-2 p-4">
            <p class="text-xl font-semibold mb-4">Body</p>
            <p class="text-xl">Nature</p>
          </div>
        </div>
      </div>
      <div class="grid_block">
        <h3 class="h3">Details</h3>
        <span class="trace"></span>
        <ul class="grid gap-2">
          <!-- Contract Adress -->
          <li>
            <p class="inline-block">Contract Adress :</p>
            <p class="inline-block font-bold">TokenK....0000</p>
          </li>

          <!-- Token ID -->
          <li class="grid grid-flow-col">
            <p class="inline-block">Token ID :</p>
            <p class="inline-block font-bold truncate ... w-5/12">{{ asset.token_id }}</p>
          </li>

          <!-- Token Standard-->
          <li>
            <p class="inline-block">Token Standard :</p>
            <p class="inline-block font-bold">Kulture</p>
          </li>

          <!-- Blockchain -->
          <li>
            <p class="inline-block">Blockchain :</p>
            <p class="inline-block font-bold">Ethereum</p>
          </li>

          <!-- Metadata -->
          <li>
            <p class="inline-block">Metadata :</p>
            <p class="inline-block font-bold">Centralized</p>
          </li>
        </ul>
      </div>
      <div class="md:col-span-2">
        <h3 class="h3">Offers</h3>
        <span class="trace"></span>
        <p class="m-20 text-center">Pas d'offres proposées</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import {getAnAsset, fetchLoop, Asset} from '~/service/openSea'
import collectionAssets from "~/data/collection-assets";

@Component
export default class ArtAsset extends Vue {

  asset: any = false

  async mounted() {
    const contractId = this.$route.params.contractId
    const tokenId = this.$route.params.tokenId

    // const asset: Asset = await fetchLoop(getAnAsset, [contractId, tokenId])

    this.asset = collectionAssets.assets.find((a) => a.token_id === tokenId)


    // return {asset}
  }

  /*
  async asyncData({params}) {
    const contractId = params.contractId
    const tokenId = params.tokenId
    // const asset: Asset = await fetchLoop(getAnAsset, [contractId, tokenId])

    const asset = collectionAssets.find((a) => a.token_id = tokenId)

    return {asset}
  }
   */
}
</script>


<style lang="scss">
.grid_block {
  @apply col-span-1;
}

.trace {
  @apply my-4 block w-full;

  height: 1px;
  background: #dbe2e6;
}

.h3 {
  @apply font-semibold text-3xl;
}

.btn {
  @apply px-11 py-4 bg-gray-800 hover:bg-gray-600 inline-block text-white text-base
}

</style>

