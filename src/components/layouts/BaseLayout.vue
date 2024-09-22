<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent } from 'naive-ui';
import { RouterLink } from 'vue-router';

</script>
<template>
  <n-layout has-sider class="h-full">
    <n-layout-sider collapse-mode="width" :collapsed-width="120" :width="240" show-trigger="arrow-circle"
      content-style="padding: 24px;" bordered>
      <nav>
        <router-link to="json/format">json 格式化</router-link>
      </nav>
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component v-if="$route.meta.keepAlive" :is="Component" />
        </keep-alive>
        <component v-if="!$route.meta.keepAlive" :is="Component" />
      </router-view>
    </n-layout-content>
  </n-layout>
</template>


<style scoped>
.h-full {
  height: 100%;
}
</style>