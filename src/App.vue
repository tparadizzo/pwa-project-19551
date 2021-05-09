<template>
  <div id="app">
    <GoogleMaps :data="mapData" @markerSelected="markerSelected" />
    <div class="app-info">
      <FavouritesDetailView
        @back="onBack"
        v-if="selectedStation"
        :selectedStation="selectedStation"
      />
      <ListView
        :data="mapData"
        v-if="!selectedStation"
        @select="markerSelected"
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
import ListView from "./components/ListView";

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
    ListView,
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
      debugger;
      this.screen = "Favourites";
      this.mapData = this.favouritesBikeData;
    },

    goToAccount() {},

    markerSelected(item) {
      this.selectedStation = item;
    },

    onBack() {
      this.selectedStation = null;
    },
  },
};
</script>

<style>
.app-info {
  height: calc(40vh - 3rem);
  box-shadow: 0 -0.3rem 10px rgba(0, 0, 0, 0.3);
}

#app {
  font-family: "Karla", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 35rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  background: white;
  box-shadow: 0 -0.3rem 10px rgba(0, 0, 0, 0.3);
}

nav button {
  border: none;
  flex: 1;
  padding: 1rem 2rem;
}
</style>

