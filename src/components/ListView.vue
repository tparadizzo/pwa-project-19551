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

<style>
.list-view {
  height: 100%;
  overflow: auto;
}

h1 {
  font-size: 25px;
  text-align: left;
  padding: 16px 24px 16px 24px;
  background-color: #5ab5f2;
  margin: 0;
  position: sticky;
  top: 0;
}
ul {
  list-style: none;
  text-align: left;
  padding: 16px 24px 16px 24px;
  border-style: solid;
  border-radius: 7px;
  border-color: lightgray;
  border-radius: 4px;
  margin: 0;
}
</style>