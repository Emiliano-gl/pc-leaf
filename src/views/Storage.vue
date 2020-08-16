<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-h2">Storage</h1>
        <p>{{storageInfo}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Storage",
  computed: {
    storageInfo() {
      return this.$store.state.storageInfo;
    },
  },
  methods: {
    ...mapActions(["initStorageInfo"]),
  },
  mounted(){
    this.initStorageInfo()
  }
};
</script>

<style lang="scss" scoped></style>
