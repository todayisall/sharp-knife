<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent } from 'naive-ui';

</script>
<template>
  <n-layout has-sider class="h-full">
    <n-layout-sider collapse-mode="width" :collapsed-width="120" :width="240" show-trigger="arrow-circle"
      content-style="padding: 24px;" bordered>
      <div class="menu">

      </div>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      平山道
    </n-layout-content>
  </n-layout>
</template>


<style scoped>
.h-full {
  height: 100%;
}
</style>