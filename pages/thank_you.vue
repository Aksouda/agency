<template>
  <div>
    <Wrapper :style="{'height':'83vh','max-width': '1900px !important'}">
      <v-row
        cols="12"
        class="py-10"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-left text-center banner"
        >
          <h1>
            Ești cu un pas mai aproape de jobul tău dorit!
          </h1>
          <br>
         <p>
        

Am primit informațiile tale. <br>

Pe emailul tău ai primit testul Recruto. <br>

Avem o rugăminte importantă - Completează testul atunci când ești într-un mediu neutru și calm. Testul va dura între 20-30 de minute. <br>

După completarea testului vei primi pe email linkul să programezi ședința ta gratuită de consiliere in carieră.
         </p>
          <br>
           <v-btn
              x-large
              color="#455a64"
              dark
              class="mt-7"
              outlined
             :to="localePath('/test')"
            >
               Completează Testul Acum
            </v-btn>
        </v-col>
        <v-col
          cols="6"
          xs="12"
          md="6"
          class="text-center"
        >
         <img
            class="responsive"
            alt="Comparingpeople"
            :src="require('@/assets/thanku.svg')"
            loading="lazy"
          >
        </v-col>
      </v-row>
    </Wrapper>
  </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
methods: {
    goto (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop
      window.scrollTo(0, top)
    }
  },
  name: 'Home',
  head () {
    return {
      title: this.$t('frontpage.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('frontpage.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('frontpage.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('frontpage.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('frontpage.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('frontpage.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('frontpage.seo.description') }
      ]
    }
  },
  computed: {
    ...mapState(['development'])
  },
  mounted () {
    this.$amplitude.getInstance().logEvent('b5.frontpage.loaded')
  }
}
</script>
<style scoped>
p {
  font-size: 1.3rem;
  line-height: 1.9;
}

.responsive-text {
  padding-top: 10px;
  font-size: 18px;
  line-height: 1.0;
}

.responsive {
  max-width: 100%;
  height: auto;
}

.black--link a {
  color: unset;
  text-decoration: underline;
}
.container {
    max-width: 1900px !important;
}
.v-application .pt-12 {
    padding-top: 0px !important;
}
.v-application .py-10{
  padding-top: 0px!important;
}
/* .company:hover{
 background-position:center;
  transition:all 1s;
  background-color:#ccbdbd;
} */

.v-responsive__sizer{
  padding-bottom:50% !important;
}
.company{
  position:absolute;
}
.cardimg{
  height:450px;
}
</style>
