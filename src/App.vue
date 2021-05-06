<template>
  <div id="app">
    <GoogleMaps :data="mapData" @markerSelected="markerSelected" />
    <div>
      <FavouritesDetailView
        v-if="selectedStation"
        :selectedStation="selectedStation"
      />
    </div>
    <nav>
      <button @click="goToFavourites">Favourites</button>
      <button @click="goToStation">Stations</button>
      <button @click="goToAccount">Account</button>
    </nav>
  </div>
</template>

<script>
import GoogleMaps from "./components/GoogleMaps";
import { getDublinBike } from "./services/dublinBikeService";
import FavouritesDetailView from "./components/FavouritesDetailView";

export default {
  data() {
    return {
      mapData: [],
      stationsBikeData: [],
      favouritesBikeData: [],
      screen: "Stations",
      selectedStation: null,
    };
  },

  name: "App",
  components: {
    GoogleMaps,
    FavouritesDetailView,
  },

  async mounted() {
    await this.getDublinBike();
    this.goToStation();
  },

  methods: {
    async getDublinBike() {
      const dublinData = await getDublinBike();
      const dublinJson = await dublinData.json();
      this.stationsBikeData = dublinJson;
    },

    goToStation() {
      this.screen = "Station";
      this.mapData = this.stationsBikeData;
    },

    goToFavourites() {
      this.screen = "Favourites";
      this.mapData = this.favouritesBikeData;
    },

    goToAccount() {},

    markerSelected(item) {
      this.selectedStation = item;
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

