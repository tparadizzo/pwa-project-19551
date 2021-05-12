<template>
  <div class="weather-view">
    <div id="city-name">{{ data.name }}</div>
    <div id="main-temp">{{ data.main.temp }} °C</div>
    <div class="temp-info">
      <div class="weather-info">
        <p>Feels Like</p>
        <p class="weather-temp">{{ data.main.feels_like }} °C</p>
      </div>
      <div class="weather-info">
        <p>Minimum</p>
        <p class="weather-temp">{{ data.main.temp_min }} °C</p>
      </div>
      <div class="weather-info">
        <p>Maximum</p>
        <p class="weather-temp">{{ data.main.temp_max }} °C</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.weather-view {
  position: relative;
  z-index: 1;
  text-align: left;
  padding: 0 24px 1px;
  box-shadow: 2px 2px 0.3rem 2px rgb(0 0 0 / 10%);
}

.weather-info {
  flex: 1;
  text-align: center;
  padding: 10px 20px;
}

.weather-info p {
  margin: 0;
}

.weather-temp {
  font-weight: bold;
}

#city-name {
  font-size: 40px;
  padding: 10px 50px;
  position: absolute;
}

#main-temp {
  font-size: 40px;
  flex: 1;
  position: absolute;
  right: 24px;
  padding: 10px 50px;
  font-weight: bold;
}

.temp-info {
  display: flex;
  flex-direction: row;
  padding: 50px 24px 0 24px;
  font-size: 13.5px;
}
</style>