<template>
  <div>
    <Wrapper>
      <v-row
        cols="12"
        class="py-10"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-left text-center"
        >
          <h1>
            {{ $t('frontpage.title') }}
          </h1>
          <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.top_candidate_banner')"
          />
          <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.info')"
          />
           <p
            :class="{ 'responsive-text': $vuetify.breakpoint.smAndDown }"
            v-html="$t('frontpage.description.result_candidate')"
          />
          <v-btn
            x-large
            color="#455a64"
            dark
            class="mt-7"
            outlined
            @click="goto('form')"
          >
            {{ $t('frontpage.find_dream_job.action') }}
          </v-btn>
          <br>
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
            :src="require('@/assets/bannercan.svg')"
            loading="lazy"
          >
        </v-col>
      </v-row>
    </Wrapper>
    <Wrapper background="#e4e4e4">
      <v-row
        cols="12"
        class="py-10"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1
            class="font-italic"
            v-html="$t('frontpage.tests_taken')"
          />
        </v-col>
        <v-col>
          <Highlights />
        </v-col>
      </v-row>
    </Wrapper>
    <Wrapper background="white">
      <v-row
        cols="12"
        :class="{ 'flex-column-reverse': $vuetify.breakpoint.smAndDown }"
        class="py-10"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-center"
        >
          <img
            class="responsive"
            alt="Comparing people"
            :src="require('@/assets/final.svg')"
            loading="lazy"
          >
        </v-col>
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-left text-center"
        >
          <h1 v-html="$t('frontpage.find_dream_job.title')" />
          <br>
          <br>
          <p v-html="$t('frontpage.find_dream_job.text1')" />
          <p v-html="$t('frontpage.find_dream_job.text2')" />
          <p>
            <v-btn
              x-large
              color="#455a64"
              dark
              class="mt-7"
              outlined
              @click="goto('form')"
            >
              {{ $t('frontpage.find_dream_job.action') }}
            </v-btn>
          </p>
        </v-col>
      </v-row>
      <v-row ref="form">
        <v-col
          class="text-center"
          cols="12"
        >
          <h2
            style="color: #797878"
            v-html="$t('frontpage.share')"
          />
           <script>

var partner = window.location.pathname.split('/').pop();
console.log(partner);

</script>
        <script> window.addEventListener('b24:form:init', function (event)  { let form = event.detail.object; if (form.identification.id == 18) { form.setProperty('partner', partner);}}); </script>
<script data-b24-form="inline/18/jbtjqj" data-skip-moving="true">
        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://bitrix.monefy.ro/upload/crm/form/loader_18_jbtjqj.js');
</script>
        </v-col>
      </v-row>
    </Wrapper>
  </div>
</template>
<script>
export default {
  methods: {
    goto (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop
      window.scrollTo(0, top)
    }
  },
  name: 'Candidați ',
  head () {
    return {
      title: this.$t('frontpage.seo.title_can'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('frontpage.seo.title_can') },
        { hid: 'description', name: 'description', content: this.$t('frontpage.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('frontpage.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('frontpage.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('frontpage.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('frontpage.seo.description') }
      ]
    }
  }
}
</script>
<style>
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
.container{
  max-width:unset !important;
}
a.hidden-sm-and-down{
  display: none important;
}
</style>
<style scoped>
a.hidden-sm-and-down{
  display: none !important;
}
</style>