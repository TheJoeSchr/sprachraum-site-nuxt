<template lang='pug'>
div
  // Big hero
  section
    .flex.flex-wrap.items-center.text-center.mx-2(class='md:text-left md:my-8')
      .px-2.order-1(class='md:w-1/2 md:pr-10 md:order-none')
        h2.text-2xl.py-4.mt-4.leading-tight.font-heading(class='md:text-5xl md:pb-0' v-html='toBr(hero.title)')
        h3.text-xl.text-gray-800.leading-tight.font-heading(class='md:py-4 md:my-4 md:text-xl md:pb-0' v-html='toBr(hero.subtitle)')
        p.mb-8.text-gray-600.leading-relaxed(v-html='toBr(hero.content)')
        .mb-8
          NuxtLink.inline-block.py-4.px-8.mr-6.leading-none.text-black.bg-primary-500.rounded.shadow(
            :to='hero.buttons[0].link.cached_url'
            class='hover:bg-primary-600'
          ) {{hero.buttons[0].label}}


      .px-2(class='md:w-1/2 w-full block')
        NuxtLink(:to='hero.buttons[0].link.cached_url')
          NuxtImg(:src='hero.background_image.filename', alt='')

  template(v-for='(section, index) in cards' )
    MinorHero(:value='{...section, link:section.link[0].link.url, linkText:section.link[0].label, isLeft: (index % 2 == 0)}' )
      NuxtImg(:src='section.image.filename' width='400' height='400' :center='section.center' :position='section.position' :fit='section.fit' quality=100)
    //-
      NuxtImg(v-if='1 == index' src='~/assets/images/3_Kursprogramm_Sprachraum_1_iStock-1214385234.jpg' height='400' width='400' fit='cover' quality=100)
      NuxtImg(v-if='2 == index' src='~/assets/images/WORK IT AUT-WORKBEE-LOGO-FINAL.jpg' height='300' width='300' center='top' fit='outside' quality=100)
      NuxtImg(v-if='3 == index' src='~/assets/images/schneemann-119510173.jpg' height='300' width='300' position='left' fit='cover' quality=100)
      NuxtImg(v-if='4 == index' src='~/assets/images/kocherei-stock-resort-kulinarik-genusshotel-05.jpg' height='300' width='300' center='top' fit='cover' quality=100)

  PartnerLogos
  MinorHero(:value='{...contact, isLeft: true}' v-if='contact')
    NuxtImg.mx-auto.my-4( src='~/assets/images/contact.jpg' height='300' width='300' center='top' fit='cover')

</template>
<script setup>
import { defineComponent, ref, computed } from 'vue';
import MinorHero from '~/components/MinorHero.vue'
import PartnerLogos from '~/components/PartnerLogos.vue'
import { toBr } from '~/helpers'
//import { message } from '~/content/it/Interface.yaml';


const story = await useAsyncStoryblok('index');

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response
  });
}

const { hero, cards } = {
  hero: story.value.content.body[0],
  cards: story.value.content.body[1].cards
}
</script>
<style scoped>
section {
  @apply mb-8 shadow bg-white border rounded overflow-hidden;
}

@screen md {
  section {
    @apply mb-16;
  }
}

@screen lg {
  section {
    @apply py-0 px-8;
  }
}
</style>
