<template>
  <!-- yarn add --dev @nuxtjs/google-fonts -->

  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4">
      <div class="grid_block">
        <img
          :src="asset.image_preview_url"
          alt=""
          class="w-full"
        />
      </div>
      <div class="grid_block grid content-center">
        <h2 class="font-bold text-4xl font-['Cormorant Garamond'] capitalize">
          {{ asset.collection.name }}
        </h2>
        <span class="trace"></span>
        <p class="text-3xl">{{ asset.name }}</p>
        <div>
          <p class="text-lg">2018</p>
          <span>Disponible</span>
        </div>
        <p class="text-sm">35cm x 35cm x 30cm (14" x 14" x 12")</p>
        <div>
          <img
            src="/img/ethereum_logo.png"
            alt="ethereum"
            class="h-12 inline-block"
          />
          <p class="text-3xl inline-block">0,2 eth</p>
        </div>
        <div>
          <a href="" class="btn">Cette oeuvre m'interese</a>
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
          <li>
            <p class="inline-block">Token ID :</p>
            <p class="inline-block font-bold">{{ asset.token_id}}</p>
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
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getAnAsset, fetchLoop, Asset } from '~/service/openSea'

@Component
export default class ArtAsset extends Vue {
  async asyncData({ params }) {
    const contractId = params.contractId
    const tokenId = params.tokenId
    const asset: Asset = await getAnAsset(contractId, tokenId)

    return { asset }
  }
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
</style>

