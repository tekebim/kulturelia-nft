<template>
  <div>
    <header>
      <nav class="nav p-5">
        <div class="grid md:grid-cols-2 ">
          <a href="#" class="nav__item brand-title cormorant col-span-1 text-5xl self-center" @click.prevent.self>KULTURELIA</a>
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
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},

  data() {
    return {}
  },
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
header {
  @apply h-full border-solid border-b border-gray-200 bg-backgroundBlock-light dark:bg-backgroundBlock-dark;
}
</style>
