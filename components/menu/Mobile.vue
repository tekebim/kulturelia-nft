<template>
  <nav class="menu">
    <div id="menuBurger">
      <Icon :size="2" name="burger"/>
      <Icon :size="2" name="kulturelia"/>
      <Icon :size="2" name="search"/>
    </div>
  </nav>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'
import KultureliaLogo from '~/components/ui/Icon/Kulturelia.vue'
import Icon from '@/components/ui/Icon/index.vue'

@Component({
  components: {
    KultureliaLogo,
    Icon,
  },
})

export default class Menu extends Vue {

}
</script>

<style lang="scss" scoped>
.menu {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
}
</style>

