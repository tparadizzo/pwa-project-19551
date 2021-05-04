<template>
  <div id="app">
    <GoogleMaps :data="mapData" />
  </div>
</template>

<script>
import GoogleMaps from "./components/GoogleMaps";
import { getDublinBike } from "./services/dublinBikeService";

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

  async mounted() {
    await this.getDublinBike();
  },

  methods: {
    async getDublinBike() {
      const dublinData = await getDublinBike();
      const dublinJson = await dublinData.json();
      this.mapData = dublinJson;
    },
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

