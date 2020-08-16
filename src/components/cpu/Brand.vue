<template>
  <v-card shaped :elevation="elevation" :color="color" dark>
    <v-card-title class="justify-center">
      {{ data }}
    </v-card-title>
  </v-card>
</template>

<script>

export default {
  name: "Manofactured",
  props: {
    data: String,
  },
  data() {
    return {
      color: "",
      elevation: 8,
    };
  },
  beforeUpdate() {
    if (this.data == "AMD") {
      this.color = "#E53935";
    } else {
      this.color = "#29B6F6";
    }
  },
  mounted() {
    if (this.data == "AMD") {
      this.color = "#E53935";
    } else {
      this.color = "#29B6F6";
    }
  },
};
</script>

<style lang="scss" scoped></style>
