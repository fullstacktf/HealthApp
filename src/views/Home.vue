<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="left"
      absolute
      dark
    >
      <UserCard />
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-container>Holi soy el home</v-container>
  </v-app>
</template>

<script>
import UserCard from "./../components/UserCard";
export default {
  components: {
    UserCard
  },
  data: () => ({
    expandOnHover: true
  })
};
</script>