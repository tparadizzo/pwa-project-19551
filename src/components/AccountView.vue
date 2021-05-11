<template>
  <div>
    {{ account }}
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  props: {
    account: {
      type: Object,
    },
  },

  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>