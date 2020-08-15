<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="text-h1">PC Leaf</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";

export default {
  name: "Home",
  data() {
    return {
      cpuInfo: {}
    };
  },
  mounted() {
    ipcRenderer.send("cpu-data");
    ipcRenderer.on("cpu-data-reply", (event, arg) => {
      console.log(arg);
      this.cpuInfo = arg;
    });
  }
};
</script>

<style lang="scss" scoped></style>
