<template>
  <div>
    <nav>This is a dummy nav</nav>
    <Nuxt />
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: `Kultura`,
      meta: [{ hid: 'description', name: 'description', content: 'Kultura' }],
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  background: grey;
  width: 100vw;
  height: 100px;
}
</style>>
