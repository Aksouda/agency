<template>
  <v-footer class="pl-10 pt-10">
    <v-row class="footer-container">
      <v-col
        sm="6"
        md="6"
        class="pl-0 pt-0"
      >
        <v-row class="footer-wrapper pl-0">
          <v-col class="footer-heading">
            {{ $t('frontpage.title_footer') }}<br>
          </v-col>
          <v-col
            cols="12"
            class="pt-0"
          >
            <a
              href="https://www.facebook.com/recruto.ro/"
              aria-label="Gå til facebook"
            >
              <v-icon large>{{ mdiFacebook }}</v-icon>
            </a>

            <v-divider
              inset
              vertical
              class="mx-1"
            />

            <a
              href="https://instagram.com/recruto.ro/"
              aria-label="Gå til github"
            >
              <v-icon large>{{ mdiInstagram }}</v-icon>
            </a>

            <v-divider
              inset
              vertical
              class="mx-1"
            />
          </v-col>
          <v-col
            class="footer-text"
            cols="12"
          >
            © {{ new Date().getFullYear() }} — Recruto - all rights reserved.
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="6"
        class="footer-about"
      >
        Recruto<br>
        {{ $t('frontpage.address1') }}<br>
         {{ $t('frontpage.address2') }}<br>
         {{ $t('frontpage.address3') }}<br>
        info@Recruto.ro<br><br>
        <a
      href="https://recruto.ro/privacy"
      target="_blank"
    >{{ $t('frontpage.policy') }}</a><br>
     <a
      href="https://recruto.ro/terms"
      target="_blank"
    >{{ $t('frontpage.terms') }}</a><br>
     <a
      href="https://recruto.ro/cookies"
      target="_blank"
    >{{ $t('frontpage.cookies') }}</a><br>
    <a
      href="https://recruto.ro/gdpr"
      target="_blank"
    >{{ $t('frontpage.gdpr') }}</a><br>
      </v-col>
     
    </v-row>
  </v-footer>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from '@mdi/js'

export default {
  name: 'Footer',
  data: () => ({
    mdiFacebook,
    mdiTwitter,
    mdiLinkedin,
    mdiInstagram
  }),
  methods: {
    logClick (choice) {
      console.log(choice)
      this.$amplitude.getInstance().logEvent(`goes to ${choice}`, {})
    }
  }
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
}
.footer-heading {
  font-family: Work sans-serif;
  font-size: 4rem;
  color: #4c4f5a;
  line-height: 3.5rem;
}
.footer-about {
  letter-spacing: .1em;
}
.footer-about a{
   color: #b3b3b3;
}
.footer-text {
  font-family: 'Didact Gothic', sans-serif;
  color: #b3b3b3;
}
.footer-wrapper {
  max-width: 1200px;
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
</style>
