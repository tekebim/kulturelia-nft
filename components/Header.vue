<template>
    <div>
        <header>
            <nav class="nav">
                <a href="#" class="nav__item" @click.prevent.self @mouseover="isUser = true"  @mouseleave="isUser = false">
                  Accueil
                </a>
            </nav>
        </header>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},

    data(){
        return {
            idCollection:   false,
            isLight:   false,
            isInformation: false,
            isLanguage:  false,
            isUser:  false
        }
    }


})

export default class Header extends Vue {}
</script>

<style scoped lang="scss">
    header{
        @apply h-full shadow-lg bg-backgroundBlock-light dark:bg-backgroundBlock-dark;
    }

    .nav{
        @apply grid;
    }

    .nav__item{
        @apply grid place-content-center relative;
        height: 80px;

        svg{
            @apply duration-200
        }
    }

    .nav__item:hover{
        svg{transform: scale(0.9)}
    }
    .nav__item:first-child{
        &:hover{transform: none}
    }

    .dropDownMenu{
        @apply absolute top-0 left-20;
    }

    .nav__item__text{
        @apply hidden;
    }

    .nav__item svg{
        @apply h-7 w-7;
    }

</style>
