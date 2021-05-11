<template>
  <div class="weather-view">
    <div id="city-name">{{ data.name }}</div>
    <div id="main-temp">{{ data.main.temp }} °C</div>
    <div class="temp-info">
      <div id="feels-like">
        <p>Feels Like {{ data.main.feels_like }} °C</p>
      </div>
      <div id="temp-min">
        <p>Minimum {{ data.main.temp_min }} °C</p>
      </div>
      <div id="temp-max">
        <p>Maximum {{ data.main.temp_max }} °C</p>
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
  padding: 16px 24px 1px;
  box-shadow: 2px 2px 0.3rem 2px rgb(0 0 0 / 10%);
}

#city-name {
  font-size: 40px;
  padding: 5px 0 5px 0;
  position: absolute;
  margin-left: 17%;
}

#main-temp {
  font-size: 40px;
  padding: 5px 0 5px 0;
  margin-left: 55%;
}

.temp-info {
  display: flex;
  flex-direction: row;
  padding: 0 24px 0 24px;
  font-size: 13.5px;
}

#feels-like,
#temp-min,
#temp-max {
  margin: 0 40px;
  text-align: center;
}
</style>