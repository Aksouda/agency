<template>
  <v-row>
    <v-col
      cols="12"
      xs="6"
      sm="6"
      md="4"
    >
      <img
        class="responsive"
        alt="free"
        :src="require('@/assets/open-source.png')"
        loading="lazy"
      >
      <h3 v-html="$t('frontpage.cards.free.title')" />
      <span color="#666">{{ $t('frontpage.cards.free.text') }}</span>
    </v-col>
    <v-col
      cols="12"
      xs="6"
      sm="6"
      md="4"
    >
      <img
        class="responsive"
        alt="open source"
        :src="require('@/assets/free.png')"
        loading="lazy"
      >
      <h3 v-html="$t('frontpage.cards.open.title')" />
      <span color="#666">{{ $t('frontpage.cards.open.text') }}</span>
    </v-col>
    <v-col
      cols="12"
      xs="6"
      sm="6"
      md="4"
    >
      <img
        class="responsive"
        alt="scientific"
        :src="require('@/assets/scientific.png')"
        loading="lazy"
      >
      <h3 v-html="$t('frontpage.cards.scientific.title')" />
      <span color="#666">{{ $t('frontpage.cards.scientific.text') }}</span>
    </v-col>
  </v-row>
</template>

<style scoped>
.responsive {
  max-width: 100%;
  height: auto;
}

h3 {
  padding-bottom: 5px;
  padding-top: 5px;
}
</style>
