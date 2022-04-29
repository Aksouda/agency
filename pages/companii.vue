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
            Găsește angajații cei mai potriviți și buni pentru compania ta
          </h1>
          <br>
           <p>Compania ta merită doar ce-i mai bun. Recruto te ajută să găsești doar angajați potriviți ca să ai o echipă performantă și de încredere.
          <p/>
          <v-btn
            x-large
            color="#1d68a5"
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
        <h1>
        Metoda Recruto
        </h1>
        <br>
        <p>
        Într-o lume plină de opțiuni candidații se gândesc de două ori înainte să aplice la o companie. Aceștia pun foarte mare accent pe partea de potrivire. Dacă nu se regăsesc în cultura companiei și poziția pe care o au atunci se creează un flux mare de personal și drept urmare rata de retenție scăzută.
        </p>
        <br>
        <p>
        Recruto testează fiecare candidat în parte, pentru a-i înțelege caracteristicile personale și aptitudinile profesionale. Astfel putem să ne asigurăm că îți recomandăm doar candidați relevanți, care s-ar simți ca acasă în noua lor poziție în compania ta.</p>
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
            :src="require('@/assets/idea.jpg')"
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
    <li>
       <h1 style="margin-bottom:42px;">
        Beneficiile testului Recruto
        </h1>
        </li>
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p class="points">Cunoaștem caracteristicile candidatului înainte de interviu</p>
        </li>
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p class="points">Îți recomandăm doar candidați 100% potriviți și relevanți</p>
        </li>
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p class="points">Creștem rata de retenție, scădem fluxul de personal</p>
        </li>
        <li class="feat">
         <img
            class="tick"
            alt="tick"
            :src="require('@/assets/tick.png')"
            loading="lazy"
          >
        <p class="points">Astfel îți reducem și costurile de recrutare</p>
        </li>

        </ul>
        </v-col>
      </v-row>
      </Wrapper>
      <Wrapper class="devider" :style="{backgroundImage: `url(` + require(`~/assets/devide.jpg`) + `)`}">
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
           <p>Misiunea noastră este să ajutăm companiile să găsească doar angajați potriviți și relevanți. Ca să ne asigurăm că există o potrivire 100%, nu percepem niciun comision până când candidatul recomandat nu împlinește 3 luni în compania ta.
          <p/>
        </v-col>
      </v-row>
    </Wrapper>
    <Wrapper>
      <v-row ref="form">
        <v-col
          class="text-center"
          cols="12"
        >
        <br>
        <br>
        <h2 style="color: #797878">
        Cu Recruto ai doar de câștigat, nimic de pierdut. Completeaza formularul de mai jos și beneficiază de o metodă de recrutare modernă, bazat pe testul Recruto, fără bătaie de cap:
        </h2>
        <br>
        <br>
         <script data-b24-form="inline/19/g1dm7u" data-skip-moving="true">
        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://bitrix.monefy.ro/upload/crm/form/loader_19_g1dm7u.js');
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
  name: 'Companii ',
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
  object-fit: contain;
}
.points{
  font-size:1.2rem !important;
  line-height: 2.9;
}
.devider{
  background-size:cover !important;
  background-position:center !important;
  background-blend-mode: screen !important;
}
</style>
<style scoped>
a.hidden-sm-and-down{
  display: none !important;
}
</style>