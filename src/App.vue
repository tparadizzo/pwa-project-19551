<template>
  <div id="app">
    <GoogleMaps :data="mapData" />
  </div>
</template>

<script>
import GoogleMaps from "./components/GoogleMaps";

export default {
  data() {
    return {
      mapData: [],
    };
  },

  name: "App",
  components: {
    GoogleMaps,
  },
};
</script>

<style>
#app {
  font-family: "Karla", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

