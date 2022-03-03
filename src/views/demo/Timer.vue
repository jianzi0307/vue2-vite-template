<template>
  <div>timer</div>
</template>

<script>
export default {
  nam: "Timer",
  mounted() {
    // $doTask 定时任务
    this.$doTask(() => {
      console.log("每秒调用1次");
    }, 1000);

    this.$doTask(
      () => {
        console.log("立即执行，每秒调用1次");
      },
      1000,
      true
    );

    // vue.prototype.$timerMgr.doOnce() 仅调用1次
    this.$timerMgr.doOnce(() => {
      console.log("仅调用1次");
    }, 1000);
  },
};
</script>
