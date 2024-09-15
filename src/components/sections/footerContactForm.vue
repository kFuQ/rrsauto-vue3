<template>
  <v-form>
    <v-text-field label="Name" dense outlined></v-text-field>
    <v-text-field label="Email Addy" dense outlined></v-text-field>
    <v-text-field label="Subject" dense outlined></v-text-field>
    <v-textarea
      dense
      label="Your Message"
      auto-grow
      outlined
      rows="6"
      row-height="17"
    ></v-textarea>
    <v-btn outlined block color="primary">Submit</v-btn>
  </v-form>
</template>
