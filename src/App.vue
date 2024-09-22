<script setup lang="ts">
</script>

<template>
  <NConfigProvider class="h-full w-full">
    <RouterView />
  </NConfigProvider>
</template>

<style scoped>
.h-full {
  height: 100%;
}

.w-full {
  width: 100%;
}
</style>
