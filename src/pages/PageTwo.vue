<template>
<div class="page-two">
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {subtract} from "@/utils";

export default defineComponent({
  name: "PageTwo",
  mounted() {
    const result = subtract(2,1);
    alert(result);
  }
})
</script>

<style scoped lang="less">
.page-two {
  background-color: black;
}
</style>