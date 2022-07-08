<template>
<div class="page-one">
  <TextField/>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {TextField} from "@/components";

export default defineComponent({
  name: "PageOne",
  components:{TextField}
})
</script>

<style scoped lang="less">
.page-one {
  background-color: #2c3e50;
}
</style>