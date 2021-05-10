<template>
  <div>
    <div>{{ data.name }}</div>
    <div>{{ data.main.temp }}</div>
    <div>{{ data.main.feels_like }}</div>
    <div>{{ data.main.temp_min }}</div>
    <div>{{ data.main.temp_max }}</div>
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