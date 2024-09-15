<template>
  <section
    :class="
      $vuetify.theme.dark
        ? 'grey darken-3 red--text text--lighten-2'
        : 'grey lighten-4 primary--text'
    "
    class="primary--text py-16"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col cols="12" sm="7" class="text-center">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4"
              >
                Contact Us Now for an appointment!
              </h2>

              <p>
                Send us an email, Give us a call or just simply
                <a
                  href="https://g.page/rrs-automotive?share"
                  target="_blank"
                  rel="noreferrer"
                  >stop by the shop</a
                >
                to schedule an appointment or get your vehicle serviced today!.
              </p>
            </v-col>
            <v-col align-self="center" cols="12" sm="5" class="text-center">
              <a href="/contact">
                <v-btn x-large color="primary" rounded>Get Service Now</v-btn>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
