<script setup lang="ts">
</script>

<template>
  <NConfigProvider class="h-full w-full">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component v-if="$route.meta.keepAlive" :is="Component" />
      </keep-alive>
      <component v-if="!$route.meta.keepAlive" :is="Component" />
    </router-view>
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
