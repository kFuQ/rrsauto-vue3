<template>
  <section class="secondary darken-3 white--text py-16">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">
            We also service European vehicles such as Audi, BMW, Mercedes Benz
            and Porsche as well!<br />
          </h2>
          <div
            class="text-h5 text-md-h4 text-center font-weight-black py-3 mb-10"
          >
            Schedule your service today to keep your ride in top notch shape!
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-avatar
            size="80"
            class="display-1 white font-weight-bold primary--text mb-5"
            style="opacity: 1.15"
            >{{ card.callout }}</v-avatar
          >
          <div class="title text-uppercase mt-1 mb-4" v-text="card.title"></div>

          <p v-text="card.text"></p>
          <v-row no-gutters>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-btn
          x-large
          rounded
          color="white primary--text mx-auto mt-10 px-16"
          href="/contact"
        >
          <v-icon dark left> mdi-check-bold </v-icon>Get Directions
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Procedures',
          subtitle: 'Best Procedures',
          text: 'RRS Auto keeps up with the latest technical information so our technicians are able to quickly and accurately diagnose and repair your european vehicle.',
          callout: '01',
        },
        {
          title: 'Affordable Prices',
          subtitle: 'Special Offers',
          text: 'RRS Automotive has extremely competive pricing compared to the dealerships and major automotive repair chains.',
          callout: '02',
        },
        {
          title: 'Factory (OEM) Parts',
          subtitle: 'Income Flow',
          text: 'RRS Automotive uses OEM or better quality parts on all repairs.',
          callout: '03',
        },
      ],
    }
  },
}
</script>
