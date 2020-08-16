<template>
  <v-card flat>
    <v-card-title class="text-h5">
      CPU:
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1">
      {{ data }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "Processor",
  props: {
    data: String,
  },
  data() {
    return {
      elevation: 8,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
