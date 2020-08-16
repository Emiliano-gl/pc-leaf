<template>
  <v-card :elevation="elevation">
    <v-card-title class="text-h5">
      CPU Cores:
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1 mt-2">
      <v-row justify="space-around">
        <v-col cols="5">
          <v-card shaped color="#424242" dark>
            <v-card-title><span class="pr-2"><v-icon>linear_scale</v-icon></span>Threads: {{ threads }}</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card shaped color="#424242" dark>
            <v-card-title
              ><span class="pr-2"><v-icon>memory</v-icon></span>Cores: {{ cores }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "Processor",
  props: {
    threads: Number,
    cores: Number,
  },
  data() {
    return {
      elevation: 8,
    };
  },
};
</script>

<style lang="scss" scoped>
.gradiente {
  background: "#616161";
  border-radius: 10px;
}
</style>
