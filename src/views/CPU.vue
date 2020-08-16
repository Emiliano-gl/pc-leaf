<template>
  <v-container>
    <v-row class="mx-5" justify="space-between">
      <v-col>
        <v-card>
          <v-row justify="center">
            <v-col>
              <Processor :data="cpuInfo.brand" />
            </v-col>
            <v-col cols="3">
              <Brand class="mr-3" :data="cpuInfo.manufacturer" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-5 my-4">
      <v-col>
        <Speed
          :speed="cpuInfo.speed"
          :min="cpuInfo.speedmin"
          :max="cpuInfo.speedmax"
        />
      </v-col>
    </v-row>
    <v-row class="mx-5">
      <v-col>
        <Cores :threads="cpuInfo.cores" :cores="cpuInfo.physicalCores" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import Brand from "../components/cpu/Brand";
import Processor from "../components/cpu/Processor";
import Speed from "../components/cpu/Speed";
import Cores from "../components/cpu/Cores";

export default {
  name: "CPU",
  components: {
    Brand,
    Speed,
    Processor,
    Cores,
  },
  computed: {
    cpuInfo() {
      return this.$store.state.cpuInfo;
    },
  },
  methods: {
    ...mapActions(["initCpuInfo"]),
  },
  mounted() {
    this.initCpuInfo();
  },
};
</script>

<style lang="scss" scoped></style>
