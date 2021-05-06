<template>
  <div class="detail-view">
    <div>{{ selectedStation }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFavourite: false,
    };
  },

  props: {
    selectedStation: {
      type: Object,
    },
  },

  watch: {
    selectedStation(newSelectedStation) {
      let favouriteStations = localStorage.getItem("favouriteStations");

      if (favouriteStations) {
        favouriteStations = JSON.parse(favouriteStations);
        const favouriteFound = favouriteStations.find(
          (fs) => fs.number === newSelectedStation.number
        );
        this.isFavourite = !!favouriteFound;
      }
    },
  },
};
</script>

<style scoped>
.detail-view {
  position: relative;
  z-index: 1;
}
</style>