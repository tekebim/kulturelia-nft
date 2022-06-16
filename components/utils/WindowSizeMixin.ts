import { Vue, Component } from 'nuxt-property-decorator'
import debounce from 'lodash.debounce'

@Component
export default class WindowSizeMixin extends Vue {
  windowWidth: number | null = null

  handler(): void {
    this.windowWidth = window.innerWidth
  }

  created() {
    this.handler()
    window.addEventListener('resize', debounce(this.handler, 500))
  }

  destroyed() {
    window.removeEventListener('resize', this.handler)
  }
}
