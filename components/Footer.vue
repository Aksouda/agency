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
            SPUNE<br>BUNA
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
              href="https://instagram.com/recruto.ro"
              aria-label="Instagram"
            >
              <v-icon large>{{ mdiInstagram }}</v-icon>
            </a>
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
        6L Iuliu Maniu Boulevard,Primul etaj<br>
        România 061103 Bucureşti<br><br>
        info@Recruto.ro<br>
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
    mdiGithub
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
  max-width: 1200px;
}
.footer-heading {
  font-family: 'Passion One', cursive;
  font-size: 4rem;
  color: #4c4f5a;
  line-height: 3.5rem;
}
.footer-about {
  letter-spacing: .1em;
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
