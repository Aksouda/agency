<template>
  <div>
    <Wrapper>
      <v-row
        cols="12"
        class="py-10 bannermid"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-left text-center middle wider"
        >
          <h1>
            {{ $t('frontpage.description.top_candidate_banner_hdpi') }}
          </h1>
          <br>
           <p>{{ $t('frontpage.description.info_hdpi') }}<span>{{ $t('frontpage.description.hdpi') }}</span><span>{{ $t('frontpage.description.info_hdpi1') }}</span><span>{{ $t('frontpage.description.result_candidate_hdpi') }}</span>
          <p/>
          <v-btn
            x-large
            color="#34268b"
            dark
            class="mt-7 text-center"
            outlined
            @click="goto('form')"
          >
            {{ $t('frontpage.find_dream_job.action_hdpi') }}
          </v-btn>
          <br>
        </v-col>
      </v-row>
    </Wrapper>
    <Wrapper background="white">
     <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-left text-center middle wider"
        >
        
        </v-col>
      <v-row
        cols="12"
        :class="{ 'flex-column-reverse': $vuetify.breakpoint.smAndDown }"
        class="py-10 content"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-center"
        >
          <img
            class="responsive1"
            alt="Comparing people"
            :src="require('@/assets/collab.svg')"
            loading="lazy"
          >
        </v-col>
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-left text-center"
        >
         <ul style="list-style: none;">
    
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>

        </ul>
        </v-col>
      </v-row>
      <Wrapper :style="{backgroundImage: `url(` + require(`~/assets/devide.jpg`) + `)`}">
      <v-row
        cols="12"
        class="py-10 bannermid"
      >
        <v-col
          cols="12"
          xs="12"
          md="6"
          class="text-md-left text-center middle wider"
        >
           <p>{{ $t('frontpage.description.info_hdpi') }}<span>{{ $t('frontpage.description.hdpi') }}</span><span>{{ $t('frontpage.description.info_hdpi1') }}</span><span>{{ $t('frontpage.description.result_candidate_hdpi') }}</span>
          <p/>
        </v-col>
      </v-row>
    </Wrapper>
      <v-row ref="form">
        <v-col
          class="text-center"
          cols="12"
        >
          <h2
            style="color: #797878"
            v-html="$t('frontpage.share_hdpi')"
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
.responsive1 {
  max-width: 100%;
  height: 450px !important;
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
.container.container.pt-12 {
    padding: 0 !important;
}
a.hidden-sm-and-down{
  display: none !important;
}
@media (min-width: 960px){
  button.mt-7.text-center.v-btn.v-btn--outlined.theme--dark.v-size--x-large {
    height: 46px !important;
    min-width: 202px !important;
}
.v-application .text-md-left{
  text-align: center !important;
}
}
.line{
   background-color: #1d68a5;
   width: 100%;
   height: 8px;
   position: absolute;
   top: 80px;
   left:0;
}
.companii{
    opacity:1 !important;
    background-color: #39b3ed;
    border-radius: 30px;
    padding: 1px;
    font-size: 12px;
    text-align: center;
    margin-top: 1px;
    width:135px;
}
.bannermid{
  display:block !important;
}
.middle{
  margin:auto !important;
}
.wider{
  max-width:80% !important;
}
.content{
  padding-top: 3px!important;
}
.feat{
  display:flex;
}
.tick{
  width:40px;
  height:50px;
  margin-right:20px;
}
</style>
<style scoped>
a.hidden-sm-and-down{
  display: none !important;
}
</style>