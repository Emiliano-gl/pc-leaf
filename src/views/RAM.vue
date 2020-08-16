<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-h2">RAM</h1>
        <p>{{ramInfo}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RAM",
  computed: {
    ramInfo() {
      return this.$store.state.ramInfo;
    },
  },
  methods: {
    ...mapActions(["initRAMInfo"]),
  },
  mounted(){
    this.initRAMInfo()
  }
};
</script>

<style lang="scss" scoped></style>
