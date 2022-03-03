<template>
  <div>net</div>
</template>

<script>
export default {
  nam: "Timer",
  mounted() {
    // vue.prototype.$http.get
    this.$http.get("/");
  },
};
</script>
