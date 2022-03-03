<template>
  <div class="form-test">
    <div>
      <el-button size="mini">测试按钮</el-button>
    </div>
    <div class="input">测试表单：<el-input size="mini" /></div>
  </div>
</template>

<script>
import { Button, Input } from "element-ui";
export default {
  name: "Element",
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
  },
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
