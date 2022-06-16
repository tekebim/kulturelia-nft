<template>
  <component :is="name" :style="iconStyle" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

// enum AvailableIcons {
type AvailableIcons = 'burger' | 'search' | 'kulturelia'

@Component({
  components: {
    burger: () => import('./Burger.vue'),
    search: () => import('./Search.vue'),
    kulturelia: () => import('./Kulturelia.vue'),
  },
})
export default class IconWrapper extends Vue {
  @Prop({ required: true }) readonly name!: AvailableIcons
  @Prop({ default: 3 }) readonly size!: number
  @Prop({ default: 'var(--color-primary)' }) readonly color!: string

  get iconStyle(): Record<string, string> {
    return {
      width: `${this.size}rem`,
      height: `${this.size}rem`,
      color: this.color,
    }
  }
}
</script>
