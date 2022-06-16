<template>
  <ul class="list">
    <li class="is-active">
      <nuxt-link to="/collections">
        Nos oeuvres
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        A propos
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        Pourquoi ?
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        Processus
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        Communauté
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        Participez
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">
        Contact
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'

@Component
export default class MenuLinks extends Vue {
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 30px;

  li {
    padding: 0.5rem 2rem;
    text-transform: uppercase;

    &.is-active {
      font-weight: bold;
      background-color: #F9FAFB;
      border-right: 2px solid #9FAFBC;
    }
  }
}
</style>
