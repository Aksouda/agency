<template>

<div v-if="!loading">
    <CookieConsent
    message=$t('frontpage.address1')
    link-label="mai multe informatii"
  />
  </div>
  
</template>
<script>
  import CookieConsent from '../vue-cookieconsent-component/src/components/CookieConsent.vue'
  export default {
    components: {
      CookieConsent
    },
    data: () => ({
       loading: true
     }),
     created () {
        this.$nextTick(function () {
           this.loading = false
       })
     }
  }
</script>
<style>
  .cookie-consent {
    display: flex;
    padding: 10px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-bottom: 1px solid white;
    color: white;
    position: fixed;
    bottom:20px;
    background:black;
    border-radius:5px;
    left:50px;
  }
  .cookie-consent button {
    border: 1px solid white;
    padding: 10px;
    margin-left: 20px;
    min-width: 140px;
  }
</style>
