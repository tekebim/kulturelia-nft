<template>



  <div>
    <h1>{{ slug }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div class="grid_block ">
        <img src="https://via.placeholder.com/600" alt="" class="h-full w-auto">
      </div>
      <div class="grid_block grid content-center">
        <h2 class="font-bold text-4xl">Kulturelia</h2>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra amet, sem aliquam urna malesuada gravida
          pretium vel, eu. Integer suspendisse nisl morbi at placerat viverra. Pellentesque adipiscing leo duis
          adipiscing sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra amet, sem aliquam urna
          malesuada gravida pretium vel, eu. Integer suspendisse nisl morbi at placerat viverra. Pellentesque adipiscing
          leo duis adipiscing sit.</p>
      </div>
      <div class="grid_block">
        <h3 class="h3">Artistes</h3>
        <span class="trace"></span>
      </div>
      <div class="grid_block">
        <h3 class="h3">Properties</h3>
        <span class="trace"></span>
      </div>
      <div class="grid_block">
        <h3 class="h3">Details</h3>
        <span class="trace"></span>
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
    @apply inline-block col-span-1
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