<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-h2">OS</h1>
        <p>{{osInfo}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "OS",
  computed: {
    osInfo() {
      return this.$store.state.osInfo;
    },
  },
  methods: {
    ...mapActions(["initOSInfo"]),
  },
  mounted(){
    this.initOSInfo()
  }
};
</script>

<style lang="scss" scoped></style>
