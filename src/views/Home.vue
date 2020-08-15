<template>
  <HelloWorld />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      page: "Home"
    };
  }
};
</script>
