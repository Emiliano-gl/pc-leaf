<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :color="color"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :permanent="permanent"
    dark
  >
    <v-list>
      <v-list-item two-line class="px-4">
        <v-list-item-avatar>
          <img :src="require('../assets/logo.svg')" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>PC Leaf</v-list-item-title>
          <v-list-item-subtitle>Your system information</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "home", route: "/" },
        { title: "OS", icon: "dashboard", route: "/os" },
        { title: "CPU", icon: "memory", route: "/cpu" },
        { title: "GPU", icon: "desktop_windows", route: "/gpu" },
        { title: "Storage", icon: "storage", route: "/storage" },
        { title: "RAM", icon: "sim_card", route: "/ram" },
      ],
      color: "#424242",
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
