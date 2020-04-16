<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="logoNutricare"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="namelogoNutricare"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-switch v-model="$vuetify.theme.dark" hide-details inset label="Tema oscuro" color="info"></v-switch>
    </v-app-bar>

    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",

  components: {
    Login
  },

  data: vm => ({
    initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false,
    logoNutricare: require("@/assets/nutricare_logo.png"),
    namelogoNutricare: require("@/assets/nutricare_namelogo.png"),
    goDark: false
  }),

  beforeDestroy() {
    if (!this.$vuetify) return;

    this.$vuetify.theme.dark = this.initialDark;
  }
};
</script>
