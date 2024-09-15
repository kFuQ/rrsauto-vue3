<template>
  <section
    id="testimonials"
    :class="$vuetify.theme.dark ? 'black' : 'white'"
    class="py-16"
  >
    <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-4 my-8">
      Customer Reviews
    </h2>
    <v-carousel
      cycle
      draggable="true"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in testimonials" :key="i" class="">
        <v-container fill-height>
          <div style="max-width: 700px" class="mx-auto text-center">
            <v-avatar size="64" class="mb-7">
              <img
                :src="`/reviewavatars/${item.avtar}`"
                alt="RRS Automotive Reviews"
                width="64"
                height="64"
              />
            </v-avatar>
            <h3
              :class="
                $vuetify.theme.dark
                  ? 'black'
                  : 'white grey--text text--darken-2'
              "
              class="mb-1 font-weight-black text-uppercase"
            >
              {{ item.name }}
            </h3>
            <div class="mb-10 font-weight-light grey--text text-uppercase">
              <!--{{ item.post }}-->
            </div>
            <v-row>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-open</v-icon
                ></v-col
              >
              <v-col cols="10">
                <div
                  :class="
                    $vuetify.theme.dark
                      ? 'black'
                      : 'white grey--text text--darken-2'
                  "
                  class="mb-5 font-italic"
                >
                  {{ item.quote }}
                </div>
              </v-col>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-close</v-icon
                ></v-col
              >
            </v-row>
            {{ item.url }}
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          avtar: 'person-4.jpg',
          name: 'Dave Raaf',
          post: 'Creative Editor of ABC LTD',
          quote:
            'RRS Automotive fabricated and installed a steel plate to guard my truck’s catalytic converters.  They worked overtime to meet their timing commitment. A job well done.',
          url: 'https://goo.gl/maps/HohX4jqLUvhai8Cy5',
        },
        {
          avtar: 'Vidya Sethumadhavan.png',
          name: 'Vidya Sethumadhavan',
          post: 'CEO of Json LLC',
          quote:
            'On our way to Houston, we started experiencing car trouble. Our car cooling system started to malfunction and the car was starting to get overheated. Stuck in a traffic jam and desperate to seek help, Google Maps randomly suggested RRS Automotive. It was the best on the spot decision we ever made. Angel- the owner- was knowledgeable, provided a quick solution, alternatives, options- all without charging us a dime. Angel was truly an angel- giving us peace of mind and a lesson in car mechanics! Thank you SO much for your amazing service.',
          url: 'https://goo.gl/maps/P6yarJsfNyGxrRdZ9',
        },
        {
          avtar: 'person-7.jpg',
          name: 'Luis Valbuena',
          post: 'Director of Cleaner LTD',
          quote:
            'Very honest mechanic shop. I paid them for a diagnosis on a problem my truck had they said The solution was to replace something. Turns out that part was not the solution. my truck still had the problem but they did not make me pay for the part I did not need. Had it been somewhere else I would have walked out paying for a part I didnt need and still having the problem. Definitely coming back.',
          url: 'https://goo.gl/maps/D8o8VQcWisCiSDZy8',
        },
        {
          avtar: 'dudenurse.png',
          name: 'The Dude Nurse',
          post: 'Manager of Torson LTD',
          quote:
            'Angel and his team were very professional. Kept me informed of progress and delivered my car good as new sooner than promised! Work is warrantied so I’m very happy. Highly recommend and I will be back if I ever have the need!!!',
          url: 'https://goo.gl/maps/vELbfW4ymDz6ubjb8',
        },
        {
          avtar: 'CE E.png',
          name: 'CE E',
          post: 'Human Resource Manager of Humibed LLC',
          quote:
            'Extremely professional family business 😀 Rescued me with quick replacement of my alternator. What do you need Re: your vehicle? RRS can do it Sanctuary of Jacobs Reserve & Berkshire:Within walking distance',
          url: 'https://goo.gl/maps/nrekK4XVmnMzvkKo7',
        },
      ],
    }
  },
}
</script>
