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
      }, 300);
    },
    dropMarker(item) {
      return new window.google.maps.Marker({
        position: {
          lat: item.position.lat,
          lng: item.position.lng,
        },
        map: this.map,
      });
    },

    createMarkers() {
      if (this.data) {
        debugger;
        this.markers = this.data.map(this.dropMarker);
      }
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