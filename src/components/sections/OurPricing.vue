<template>
  <section :class="$vuetify.theme.dark ? 'black' : 'white'" class="py-16">
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col class="text-center">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4"
              >
                We have the best shop rates in Conroe!
              </h2>

              <p class="my-10 title">
                RRS Automotive is a small local business with low overhead costs
                which allow us to pass our savings on to you.
              </p>
              <div class="text-center">
                <v-btn-toggle
                  v-model="planDuration"
                  active-class="primary darken-1"
                  borderless
                  mandatory
                  light
                  color="white"
                >
                  <v-btn value="monthly"> Light Auto / Truck Rates </v-btn>
                  <v-btn value="yearly"> European / Heavy Truck Rates </v-btn>
                </v-btn-toggle>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="mx-auto" style="max-width: 1200px">
        <v-col v-for="(plan, ix) in plans" :key="`plan-${ix}`" cols="12" md="4">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 24 : plan.elevation"
              :color="plan.color"
              max-width="400"
              :class="hover ? 'zoom' : 'notzoom'"
              class="mx-auto transition-swing"
            >
              <h3
                class="text-h4 text-center font-weight-black white--text pt-5"
                v-text="plan.plan"
              ></h3>
              <v-card-text
                class="text-center subtitle-1 white--text py-2"
                v-text="plan.description"
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
                  <v-list-item-icon>
                    <v-icon>
                      {{ feature.icon }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-capitalize"
                      v-text="feature.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  ><a href="/contact">
                    <v-btn
                      color="primary"
                      large
                      block
                      rounded
                      class="mx-auto my-3"
                    >
                      Schedule Service
                    </v-btn>
                  </a>
                </v-list-item>
              </v-list>
            </v-card></v-hover
          >
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
          plan: 'Service & Maintence',
          elevation: 0,
          color: 'primary darken-1',
          description: 'Regular Service and Maintanence',
          monthly: '$111',
          yearly: '$135',
          features: [
            {
              icon: 'mdi-web',
              text: 'Lube, Oil, Filter',
            },
            {
              icon: 'mdi-harddisk',
              text: 'Brake Service',
            },
            {
              icon: 'mdi-signal',
              text: 'Tune Ups',
            },
            {
              icon: 'mdi-account',
              text: 'Tire Rotations',
            },
            {
              icon: 'mdi-domain',
              text: 'Safety Inspections',
            },
            {
              icon: 'mdi-server',
              text: 'Shocks and Struts',
            },
            {
              icon: 'mdi-dns',
              text: 'Coolant Flush',
            },
          ],
        },
        {
          plan: 'Heavy Service',
          elevation: 16,
          color: 'green darken-2',
          description: 'Engine, Transmission, Differentials, etc.',
          monthly: '$111',
          yearly: '$135',
          features: [
            {
              icon: 'mdi-web',
              text: 'Engine Rebuilds & Replacement',
            },
            {
              icon: 'mdi-harddisk',
              text: 'Transmission Rebuilds & Replacement',
            },
            {
              icon: 'mdi-signal',
              text: 'Differential Service & Upgrades',
            },
            {
              icon: 'mdi-account',
              text: 'Head Gaskets',
            },
            {
              icon: 'mdi-domain',
              text: 'Timing Belts and Chains',
            },
            {
              icon: 'mdi-server',
              text: 'Transfer Case Service',
            },
            {
              icon: 'mdi-dns',
              text: 'Wheel Bearings and Hubs',
            },
          ],
        },
        {
          plan: 'Custom / Electrical',
          elevation: 0,
          color: 'orange darken-3',
          description: 'Custom Modifications, Electrical Repair',
          monthly: '$135',
          yearly: '$135',
          features: [
            {
              icon: 'mdi-web',
              text: 'Electrical Diagnosis & Repair',
            },
            {
              icon: 'mdi-harddisk',
              text: 'Custom Fabrication',
            },
            {
              icon: 'mdi-signal',
              text: 'Performance Upgrades',
            },
            {
              icon: 'mdi-account',
              text: 'Suspension Upgrades',
            },
            {
              icon: 'mdi-domain',
              text: 'Turbos, Superchargers, Tuners',
            },
            {
              icon: 'mdi-server',
              text: 'Catalytic Converter Guards',
            },
            {
              icon: 'mdi-dns',
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
.zoom {
  transform: scale(1.025) translate(0, -10px);
  transition: transform 0.2s;
}
.notzoom {
  transition: transform 0.2s;
}
</style>
