<template>
  <div class="list-view">
    <h1>Stations</h1>
    <div @click="select(item)" v-for="item in data" :key="item.number">
      <ul>
        {{
          item.name
        }}
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  methods: {
    select(item) {
      this.$emit("select", item);
    },
  },
};
</script>