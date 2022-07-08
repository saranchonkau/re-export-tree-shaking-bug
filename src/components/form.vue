<template>
  <form class="form">
    <slot/>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "form"
})
</script>

<style scoped lang="less">
.form {
  border: 1px solid black;
  border-radius: 6px;
}
</style>