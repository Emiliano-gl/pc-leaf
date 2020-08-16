import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cpuInfo: {},
    gpuInfo: {},
    osInfo: {},
    ramInfo: {},
    storageInfo: [],
  },
  mutations: {
    setCpuInfo(state) {
      ipcRenderer.send("cpu-data");

      ipcRenderer.on("cpu-data-reply", (event, arg) => {
        console.log(arg);
        state.cpuInfo = arg;
      });
    },
    setGpuInfo(state) {
      ipcRenderer.send("gpu-data");

      ipcRenderer.on("gpu-data-reply", (event, arg) => {
        console.log(arg);
        state.gpuInfo = arg;
      });
    },
    setOSInfo(state) {
      ipcRenderer.send("os-data");

      ipcRenderer.on("os-data-reply", (event, arg) => {
        console.log(arg);
        state.osInfo = arg;
      });
    },
    setRAMInfo(state) {
      ipcRenderer.send("ram-data");

      ipcRenderer.on("ram-data-reply", (event, arg) => {
        console.log(arg);
        state.ramInfo = arg;
      });
    },
    setStorageInfo(state) {
      ipcRenderer.send("storage-data");

      ipcRenderer.on("storage-data-reply", (event, arg) => {
        console.log(arg);
        state.storageInfo = arg;
      });
    },
  },
  actions: {
    initCpuInfo(context) {
      if (Object.keys(context.state.cpuInfo).length === 0) {
        context.commit("setCpuInfo");
      }
    },
    initGpuInfo(context) {
      if (Object.keys(context.state.gpuInfo).length === 0) {
        context.commit("setGpuInfo");
      }
    },
    initOSInfo(context) {
      if (Object.keys(context.state.osInfo).length === 0) {
        context.commit("setOSInfo");
      }
    },
    initRAMInfo(context) {
      if (Object.keys(context.state.ramInfo).length === 0) {
        context.commit("setRAMInfo");
      }
    },
    initStorageInfo(context) {
      if (context.state.storageInfo.length === 0) {
        context.commit("setStorageInfo");
      }
    },
  },
  modules: {},
});
