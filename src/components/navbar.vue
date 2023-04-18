<template>
  <nut-navbar :title="title" :border="true" :fixed="true" :placeholder="true" :safe-area-inset-top="true">
    <template #left>
      <slot name="left"/>
    </template>
    <template #right>
      <slot name="right"/>
    </template>
  </nut-navbar>
</template>

<script setup lang="ts">
// import {defineProps} from "vue";
defineProps<{
  title: string;
}>();

</script>
<style scoped>

</style>
