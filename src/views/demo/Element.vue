<template>
  <div class="form-test">
    <div>
      <el-button size="mini">测试按钮</el-button>
    </div>
    <div class="input">测试表单：<el-input size="mini" /></div>
  </div>
</template>

<script>
export default {
  name: "Element",
  methods: {},
};
</script>

<style lang="scss" scoped>
.form-test {
  font-size: 14px;
  color: #333;
}
.input {
  width: 300px;
}
</style>
