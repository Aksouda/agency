<template>
  <div>
    <Wrapper :style="{'height':'83vh'}">
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
            {{ $t('frontpage.title') }}
          </h1>
          <br>
          <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.welcome_banner')"
          />
           <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.result')"
          />
          <br>
           <v-btn
              x-large
              color="#455a64"
              dark
              class="mt-7"
              outlined
              @click="goto('choose')"
            >
               {{ $t('frontpage.more_info') }}
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
            :src="require('@/assets/resume.svg')"
            loading="lazy"
          >
        </v-col>
      </v-row>
    </Wrapper>
       <CookieBox />
    <Wrapper>
      <v-row
        ref="choose"
        cols="12"
        class="py-10 cancard"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-center text-center"
        >
        <v-card
            flat
            class="text-xs-center ma-3 company"
          >
            <v-img
              :src="require('@/assets/jobhun.svg')"
              color="#eeeeee"
              class="cardimg"
            />
            <v-card-text>
              <div class="subheading">
                 <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.top_candidate')"
          />
              </div>
              <div class="grey--text">
                <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.top_candidate_more')"
          />
          <br>
          <v-btn
            x-large
            color="#ecb855"
            :to="localePath('/candidate')"
            dark
            class=""
          >
            {{ $t('frontpage.more_info') }}
          </v-btn>
          <br>
          <br>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-center"
        >
          <v-card
            flat
            class="text-xs-center ma-3 company"
          >
            <v-img
              :src="require('@/assets/looking.svg')"
              color="#eeeeee"
              class="cardimg"
            />
            <v-card-text>
              <div class="subheading">
                 <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.top_company')"
          />
              </div>
              <div class="grey--text">
                <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.top_company_more')"
          />
          <br>
          <v-btn
            x-large
            color="#ecb855"
            :to="localePath('/company')"
            dark
            class=""
          >
            {{ $t('frontpage.more_info') }}
          </v-btn>
          <br>
          <br>
              </div>
            </v-card-text>
          </v-card>
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

.default-width {
  max-width: 960px;
}
/* .company:hover{
 background-position:center;
  transition:all 1s;
  background-color:#ccbdbd;
} */
.col-12{
  height:900px;
}
.banner{
  padding-top:50px;
}
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
