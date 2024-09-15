<template>
  <section class="intro-main py-7">
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col class="text-center">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4"
              >
                We have the best shop rates in Northwestern Oregon!
              </h2>

              <p class="my-10 title text-h5 text-md-h6">
                Raven Mobile Auto and RV is a small local business with low overhead costs
                which allow us to pass our savings on to you.
              </p>
            
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="intro-main">
      <v-row class="mx-auto" style="max-width: 1200px">
        <v-col v-for="(plan, ix) in plans" :key="`plan-${ix}`" cols="12" md="4">
          <v-card
            :elevation="plan.elevation"
            :color="plan.color"
            max-width="400"
            class="mx-auto transition-swing"
          >
            <h3
              class="text-h4 text-center font-weight-black white--text pt-5"
              v-text="plan.plan"
            ></h3>
            <v-card-text
              class="text-center subtitle-1 white--text py-2"
            ></v-card-text>
            <v-card-subtitle
              class="text-h5 font-weight-black text-center white--text pt-0"
              >{{ planDuration === 'monthly' ? plan.monthly : plan.yearly }}
              <span class="subtitle-1"
                >per {{ planDuration === 'monthly' ? 'Hour' : 'Hour' }}</span
              ></v-card-subtitle
            >
            <v-list>
              <v-list-item
                v-for="(feature, ik) in plan.features"
                :key="`feature-${ik}`"
                dense
              >
                <v-list-item-title
                  class="text-capitalize"
                >{{ feature.text }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <router-link to="/contact">
                  <v-btn
                    color="primary"
                    large
                    block
                    rounded
                    class="mx-auto my-3"
                  >
                    Schedule Service
                  </v-btn>
                </router-link>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      planDuration: 'monthly',
      plans: [
        {
          plan: 'Maintence',
          elevation: 0,
          color: 'primary darken-1',
          description: 'Regular Service and Maintanence',
          monthly: '$180',
          yearly: '$135',
          features: [
            {
              text: 'Lube, Oil, Filter',
            },
            {
              text: 'Brake Service',
            },
            {
              text: 'Tune Ups',
            },
            {
              text: 'Tire Rotations',
            },
            {
              text: 'Safety Inspections',
            },
            {
              text: 'Shocks and Struts',
            },
            {
              text: 'Coolant Flush',
            },
          ],
        },
        {
          plan: 'Heavy Service',
          elevation: 16,
          color: 'green darken-2',
          description: 'Engine, Transmission, Differentials, etc.',
          monthly: '$180',
          yearly: '$135',
          features: [
            {
              text: 'Engine Rebuilds & Replacement',
            },
            {
              text: 'Transmission Rebuilds & Replacement',
            },
            {
              text: 'Differential Service & Upgrades',
            },
            {
              text: 'Head Gaskets',
            },
            {
              text: 'Timing Belts and Chains',
            },
            {
              text: 'Transfer Case Service',
            },
            {
              text: 'Wheel Bearings and Hubs',
            },
          ],
        },
        {
          plan: 'Custom / Electrical',
          elevation: 0,
          color: 'orange darken-3',
          description: 'Custom Modifications, Electrical Repair',
          monthly: '$180',
          yearly: '$135',
          features: [
            {
              text: 'Electrical Diagnosis & Repair',
            },
            {
              text: 'Custom Fabrication',
            },
            {
              text: 'Performance Upgrades',
            },
            {
              text: 'Suspension Upgrades',
            },
            {
              text: 'Turbos, Superchargers, Tuners',
            },
            {
              text: 'Catalytic Converter Guards',
            },
            {
              text: 'Trailer Electrical',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.intro-main {
  width: 100%;
  min-height: 80vh; /* Ensure it covers the full viewport height */
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 20px;
  box-sizing: border-box;
}

@media (min-width: 601px) and (max-width: 960px) {
  .intro-main {
    padding: 5px;
    min-height: 200vh; /* Adjust minimum height for screens between 600 and 1000 pixels wide */
  }
}

@media (min-width: 476px) and (max-width: 600px) {
  .intro-main {
    padding: 7px;
    min-height: 200vh; /* Adjust minimum height for screens between 476 and 600 pixels wide */
  }
}

@media (max-width: 475px) {
  .intro-main {
    padding: 10px;
    min-height: 210vh; /* Increase minimum height for mobile devices */
  }
}

@media (max-width: 380px) {
  .intro-main {
    padding: 5px;
    min-height: 210vh; /* Increase minimum height for mobile devices */
  }
}

@media (max-width: 290px) {
  .intro-main {
    padding: 2px;
    min-height: 220vh; /* Increase minimum height for mobile devices */
  }
}

@media (max-width: 235px) {
  .intro-main {
    padding: 2px;
    min-height: 240vh; /* Increase minimum height for mobile devices */
  }
}

.zoom {
  transform: scale(1.025) translate(0, -10px);
  transition: transform 0.2s;
}
.notzoom {
  transition: transform 0.2s;
}
</style>
