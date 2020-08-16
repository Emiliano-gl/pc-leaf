<template>
  <v-card :elevation="elevation" class="rounded">
    <v-card-title class="text-h5">
      CPU Speed:
    </v-card-title>
    <v-card flat class="mt-0">
      <v-card-subtitle class="text-subtitle-1">
        <v-list-item>
          <v-row justify="space-between">
            <v-col class="text-center" cols="3">Min speed:</v-col>
            <v-col class="text-center" cols="3">Your CPU speed:</v-col>
            <v-col class="text-center" cols="3">Max speed:</v-col>
          </v-row>
        </v-list-item>
        <v-list-item dark class="gradiente">
          <v-row justify="space-between">
            <v-col class="text-center" cols="3">{{ min }} GHz</v-col>
            <v-col class="text-center" cols="3">{{ speed }} GHz</v-col>
            <v-col class="text-center" cols="3">{{ max }} GHz</v-col>
          </v-row>
        </v-list-item>
      </v-card-subtitle>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Processor",
  props: {
    speed: String,
    min: String,
    max: String,
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
  background: -webkit-linear-gradient(to right, #4ca2cd, #67b26f);
  background: linear-gradient(to right, #4ca2cd, #67b26f);
  border-radius: 50px;
}
</style>
