<template>
  <input class="text-field"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "text-field"
})
</script>

<style scoped lang="less">
.text-field {
  color: red;
  border: 1px solid lightseagreen;
}
</style>