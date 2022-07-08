<template>
<div class="page-two">
  <Form/>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Form from "@/components/form.vue";

export default defineComponent({
  name: "PageTwo",
  components:{Form}
})
</script>

<style scoped lang="less">
.page-two {
  background-color: black;
}
</style>