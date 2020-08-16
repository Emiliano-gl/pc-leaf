<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-h2">GPU</h1>
        <p>{{gpuInfo}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "GPU",
  computed: {
    gpuInfo() {
      return this.$store.state.gpuInfo;
    },
  },
  methods: {
    ...mapActions(["initGpuInfo"]),
  },
  mounted(){
    this.initGpuInfo()
  }
};
</script>

<style lang="scss" scoped></style>
