<template>
  <section id="intro" class="py-12 intro-main">
    <v-container>
      <v-responsive class="max-auto mx-auto text-center" max-width="80%">
        <p class="title font-weight-light">
          You and your confidence are the most important piece of the puzzle. We
          provide a wide range of automotive repair services for your
          convenience. And remember, we want to keep you in our loyal customer
          family.
          <strong
            >If you don't see the service you're looking for, just ask!</strong
          ><br /><br />
          Our experienced technicians can definitely handle your vehicle's
          problem. <a href="/contact">Contact us</a> via phone, email or
          <a
            href="https://maps.app.goo.gl/hpqARwi6HrWtv4ct8"
            target="_blank"
            rel="noreferrer"
            >in person</a
          >
          for more information about the kinds of different services that we
          offer.<br/>
        </p>
      </v-responsive>

      <v-row class="pt-20 ">
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4" class="card-spacing">
          <v-row no-gutters>
            <v-col :cols="card.callout ? 9 : 12">
              <div class="pr-2">
                <div class="text--disabled" v-text="card.subtitle"></div>
                <h4
                  class="text-uppercase mt-1 mb-3"
                  style="letter-spacing: 0.15em"
                  v-text="card.title"
                ></h4>
                <p v-text="card.text"></p>
              </div>
            </v-col>
            <v-col v-if="card.callout" cols="2">
              <span
                class="text-h3 grey--text font-weight-bold pr-8"
                style="opacity: 0.1"
                >{{ card.callout }}</span
              >
            </v-col>
          </v-row>
        </v-col>
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
          title: 'Best Productivity',
          subtitle: 'Professionally Trained',
          text: 'All of our technicians use the latest technology and tools available to quickly diagnose and repair your issue quickly.',
          callout: '01',
        },
        {
          title: 'Fast & optimized',
          subtitle: 'Small, Local Business',
          text: 'Raven Mobile Auto and RV is a small local business. We have the ability to show "Southern Hospitality" and not treat you like some number.',
          callout: '02',
        },
        {
          title: 'Full Service Repair',
          subtitle: 'Automotive and Diesel',
          text: 'Raven Mobile Auto and RV is a full service automotive and diesel repair shop.  We work on most makes and models of vehicles.',
          callout: '03',
        },
        {
          title: 'We Service and Repair RVs',
          subtitle: 'Recreational Vehicles',
          text: 'Raven Mobile Auto and RV services and repairs all makes and models of RVs.',
          callout: '04',
        },
      ],
    }
  },
}
</script>

<style scoped>
.intro-main {
  width: 80%;
  min-height: 140vh; /* Set minimum height */
  margin: 0 auto; /* Center the component */
}
.card-spacing {
  margin-top: 75px; /* Add spacing on top of the cards */
}
@media (max-width: 600px) {
  .intro-main {
    width: 100%;
    min-height: 2500px; /* Adjust minimum height for mobile devices */
  }
  .card-spacing {
    margin-top: 40px;
  }
}
@media (min-width: 601px) and (max-width: 1000px) {
  .intro-main {
    min-height: 160vh; /* Adjust minimum height for screens between 600 and 1000 pixels wide */
  }
  .card-spacing {
    margin-top: 30px; /* Decrease spacing between cards */
  }
}
@media (min-width: 476px) and (max-width: 600px) {
  .intro-main {
    min-height: 150vh; /* Adjust minimum height for screens between 476 and 600 pixels wide */
  }
  .card-spacing {
    margin-top: 20px; /* Reduce spacing between cards */
  }
}
@media (max-width: 475px) {
  .card-spacing {
    margin-top: 30px; /* Decrease spacing between cards for screens 475px and smaller */
  }
}
@media (max-width: 380px) {
  .intro-main {
    min-height: 210vh; /* Increase minimum height for screens 380px and smaller */
  }
}
@media (max-width: 290px) {
  .intro-main {
    min-height: 260vh; /* Increase minimum height for screens 290px and smaller */
  }
}
@media (max-width: 235px) {
  .intro-main {
    min-height: 290vh; /* Increase minimum height for screens 235px and smaller */
  }
}
</style>
