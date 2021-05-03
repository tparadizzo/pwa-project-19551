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
      coordinates: {
        lat: 53.35014,
        lng: -6.266115,
      },
    };
  },

  mounted() {
    this.checkGoogleLoaded();
  },

  methods: {
    checkGoogleLoaded() {
      // get user's coordinates from browser request
      this.map = new window.google.maps.Map(this.$refs.googlemaps, {
        center: this.coordinates,
        zoom: 14,
      });
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