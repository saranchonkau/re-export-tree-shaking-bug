<template>
<div class="page-one">
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {sum} from "@/utils";

export default defineComponent({
  name: "PageOne",
  mounted() {
    const result = sum(1,2);
    alert(result);
  }
})
</script>

<style scoped lang="less">
.page-one {
  background-color: #2c3e50;
}
</style>