<template>
  <div>storage</div>
</template>

<script>
export default {
  nam: "Timer",
  mounted() {
    // vue.prototype.$storage.setItem
    this.$storage.setItem("storageKey", "cookie 过期测试", 5000);

    // vue.prototype.$storage.getItem
    this.$storage.getItem("storageKey");
  },
};
</script>
