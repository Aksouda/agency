<template>
  <v-container>
    <div v-if="results">
      <v-row>
        <v-col>
          <span class="d-print-none">
            <v-select
              v-model="metadata.language"
              :items="metadata.availableLanguages"
              label="Change language"
              :append-icon="mdiMenuDown"
              @input="changeLanguage"
            />
          </span>
        </v-col>
        <v-col>
          <p
            v-if="metadata.timestamp"
            class="text-right grey--text"
          >
            {{ new Date(metadata.timestamp).toLocaleString() }}
          </p>
        </v-col>
      </v-row>

      <div class="text-center mt-10">
        <b>{{ $t('results.important') }}</b> {{ $t('results.saveResults') }} <nuxt-link :to="localePath('compare')">
          {{ $t('results.compare') }}
        </nuxt-link> {{ $t('results.toOthers') }}
        <br>
        <br>
        <v-alert
          outlined
          color="secondary"
        >
          <span
            class="secondary--text headline"
            :class="{'title': $vuetify.breakpoint.xs}"
          >{{ $route.params.id }}</span>
        </v-alert>
        <ShareLinks :id="'result/' + $route.params.id" />
      </div>
      <div
        v-for="domain in results"
        :key="domain.id"
      >
    <input
           :id="domain.title"
           type="hidden"
           name="fname"
           :value="domain.score">
      </div>

      <div 
      id="bform"
      ref="bform"
      >

      </div>
      <script>
      if(document.getElementById('Extraversie') == null){
        var Extraversion = document.getElementById('Extraversion').value;
        var Neuroticism = document.getElementById('Neuroticism').value
        var Openness = document.getElementById('Openness To Experience').value
        var Conscientiousness = document.getElementById('Conscientiousness').value;
        var Agreeableness = document.getElementById('Agreeableness').value;
      }
      else{
        var Extraversion = document.getElementById('Extraversie').value;
        var Neuroticism = document.getElementById('Nevrotism').value;
        var Openness = document.getElementById('Deschidere c??tre experien????').value;
        var Conscientiousness = document.getElementById('Con??tiinciozitate').value;
        var Agreeableness = document.getElementById('Amabilitatea').value;
      }
     

var testid = window.location.href;


const dealId = localStorage.getItem('dealId');
 console.log(dealId);


</script>







      



<div class="display-1 mt-6">
        {{ $t('results.theBigFive') }}
      </div>
       <BarChart
        :data="results"
        :max="Number(120)"
      />
      <div
        v-for="domain in results"
        :key="domain.id"
      >
        <Domain :domain="domain" />
      </div>
      <br>
      <span class="headline">{{ $t('shareLinks.shareResults') }}</span>
      <ShareLinks :id="'result/' + $route.params.id" />
    </div>
    <Error v-else />
  </v-container>
</template>

<script>
import { mdiMenuDown } from '@mdi/js'

export default {
  name: 'Result',
  async asyncData ({ params, store, $axios, query }) {
    try {
      const lang = query.lang ? `/${query.lang}` : ''
      const url = process.env.API_URL + 'result/' + params.id + lang
      
      const data = await $axios.$get(url)

      return {
        results: data.results,
        metadata: {
          timestamp: data.timestamp,
          language: query.lang || data.language || 'en',
          availableLanguages: data.availableLanguages
        }
      }
    } catch (error) {
      console.log(error)
      store.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
    }
  },
  data: () => ({
    results: false,
    mdiMenuDown
  }),
  head () {
    return {
      title: this.$t('results.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('results.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('results.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('results.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('results.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('results.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('results.seo.description') }
      ]
    }
  },
  async mounted () {
    this.$amplitude.getInstance().logEvent('b5.test', { part: 'result' })
    if(dealId == null){
        console.log('no query params');
       

        const html =
    `<script>
    window.addEventListener('b24:form:init', function (event)  { let form = event.detail.object; if (form.identification.id == 9) { form.setProperty('consciousness', Conscientiousness);
    form.setProperty('extraversion', Extraversion);
    form.setProperty('openness', Openness);   form.setProperty('Neuroticism', Neuroticism);   form.setProperty('Agreeableness', Agreeableness); form.setProperty('testid', testid);    }}); 
    <\/script>
    <script data-b24-form="auto/9/mecp9z" data-skip-moving="true">
        (function(w,d,u){
            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://bitrix.monefy.ro/upload/crm/form/loader_9_mecp9z.js');
    <\/script>
        <script data-b24-form="inline/9/mecp9z" data-skip-moving="true">
      (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://bitrix.monefy.ro/upload/crm/form/loader_9_mecp9z.js');
    <\/script>`;

  const scriptEl = document.createRange().createContextualFragment(html);
  this.$refs.bform.appendChild(scriptEl)

    }
    else{
       let dealinfo = await fetch(`https://bitrix.monefy.ro/rest/52/8xdz4hcm4mlmgdb9/crm.deal.get.json?id=${dealId}`);
        let response = await dealinfo.json();
      let dealStage = response.result.STAGE_ID;
      console.log(response);
    
    if(dealStage == 'C3:PREPARATION'){
      let dealChange = await fetch(`https://bitrix.monefy.ro/rest/52/kaals3ixqjdtjz7e/crm.deal.update.json?id=${dealId}&fields[UF_CRM_1647528341000]=${Extraversion}&fields[UF_CRM_1647528370287]=${Openness}&fields[UF_CRM_1647528380638]=${Conscientiousness}&fields[UF_CRM_1647528390894]=${Agreeableness}&fields[UF_CRM_1647528403430]=${Neuroticism}&fields[STAGE_ID]=C3:FINAL_INVOICE`);
        let res = await dealChange.json();
        console.log(res);
        
      
            
  
        }else{
          const html =
            `<script>
            window.addEventListener('b24:form:init', function (event)  { let form = event.detail.object; if (form.identification.id == 9) { form.setProperty('consciousness', Conscientiousness);
            form.setProperty('extraversion', Extraversion);
            form.setProperty('openness', Openness);   form.setProperty('Neuroticism', Neuroticism);   form.setProperty('Agreeableness', Agreeableness); form.setProperty('testid', testid);    }}); 
            <\/script>
            <script data-b24-form="auto/9/mecp9z" data-skip-moving="true">
                (function(w,d,u){
                    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                })(window,document,'https://bitrix.monefy.ro/upload/crm/form/loader_9_mecp9z.js');
            <\/script>
            <script data-b24-form="inline/9/mecp9z" data-skip-moving="true">
              (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
              })(window,document,'https://bitrix.monefy.ro/upload/crm/form/loader_9_mecp9z.js');
            <\/script>`;

  const scriptEl = document.createRange().createContextualFragment(html);
  this.$refs.bform.appendChild(scriptEl)

        }
    }
},
  methods: {
    changeLanguage (lang) {
      this.$router.replace(
        { pathname: '/result', params: { id: this.$route.params.id }, query: { lang } },
        () => {
          this.$router.go(0)
        }
      )
    }
  }
}
</script>
