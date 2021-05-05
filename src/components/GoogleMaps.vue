<template>
  <div>
    <h1>Coordinates</h1>
    <div class="google-maps" ref="googlemaps"></div>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      map: null,
      markers: [],
      coordinates: {
        lat: 53.35014,
        lng: -6.266115,
      },
    };
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  watch: {
    data(newData, oldData) {
      console.log(newData, oldData);
      this.createMarkers();
      this.clearMarkers();
    },
  },

  mounted() {
    this.checkGoogleLoaded();
  },

  methods: {
    checkGoogleLoaded() {
      this.interval = setInterval(() => {
        if (!window.google) {
          return;
        }
        // get user's coordinates from browser request
        this.map = new window.google.maps.Map(this.$refs.googlemaps, {
          center: this.coordinates,
          zoom: 14,
        });

        this.createMarkers();
        clearInterval(this.interval);
      }, 300); //going to go through the function every 300 miliseconds to check if is getting everything
    },
    dropMarker(item) {
      //create marker and set the position to be the bike station position
      const marker = new window.google.maps.Marker({
        position: {
          lat: item.position.lat,
          lng: item.position.lng,
        },
        map: this.map,
      });
      marker.addListener("click", () => {
        this.$emit("markerSelected", item);
      });
      return marker;
    },

    createMarkers() {
      if (this.data) {
        //interact over the items and map to this.markers
        this.markers = this.data.map(this.dropMarker);
      }
    },

    clearMarkers() {
      this.markers.forEach((m) => m.setMap(null));
    },
  },
};
</script>

<style scoped>
.google-maps {
  width: 100%;
  height: 60vh;
}
</style>