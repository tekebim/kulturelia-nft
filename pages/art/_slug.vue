<template>
  <!-- yarn add --dev @nuxtjs/google-fonts -->

  <div>
    <h1>{{ slug }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div class="grid_block ">
        <img src="https://via.placeholder.com/600" alt="" class="h-full w-auto">
      </div>
      <div class="grid_block grid content-center">
        <h2 class="font-bold text-4xl font-['Cormorant Garamond']">Kulturelia</h2>
        <span class="trace"></span>
        <p class="text-3xl">LINUX OPEN SOURCE SUMMIT</p>
        <div>
          <p class="text-lg">2018</p>
          <span>Disponible</span>
        </div>
        <p class="text-sm">35cm x 35cm x 30cm (14" x 14" x 12")</p>
        <div>
          <img src="/img/ethereum_logo.png" alt="ethereum" class="h-12 inline-block">
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra amet, sem aliquam urna malesuada gravida
          pretium vel, eu. Integer suspendisse nisl morbi at placerat viverra. Pellentesque adipiscing leo duis
          adipiscing sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra amet, sem aliquam urna
          malesuada gravida pretium vel, eu. Integer suspendisse nisl morbi at placerat viverra. Pellentesque adipiscing
          leo duis adipiscing sit.</p>
      </div>
      <div class="grid_block">
        <h3 class="h3">Artistes</h3>
        <span class="trace"></span>
        <div>
          <!-- Profil de l'artiste -->
          <img src="https://via.placeholder.com/100" alt="" class="rounded-full h-12 w-12 inline-block mr-4">
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
            <p class="inline-block font-bold">2o5f9jCsgfgHVKna</p>
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


<style lang="scss">
  .grid_block {
    @apply col-span-1
  }

  .trace {
    @apply my-4 block w-full;

    height: 1px;
    background: #DBE2E6;

  }

  .h3 {
    @apply font-semibold text-3xl
  }
</style>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    }
  }
</script>