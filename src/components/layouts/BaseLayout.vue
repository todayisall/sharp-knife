<script setup lang="ts">
import {
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NMenu,
  MenuOption,
  NIcon,
} from "naive-ui";
import type { Component } from "vue";
import { h, ref } from "vue";
import { RouterLink } from "vue-router";

import { Baseball, BugSharp } from "@vicons/ionicons5";

const collapsed = ref(true);
const activeKey = ref("json/format");

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "jsonFormat",
          },
        },
        { default: () => "json 格式化" }
      ),
    key: "jsonFormat",
    icon: renderIcon(Baseball),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "jsonToTsType",
          },
        },
        { default: () => "json2Ts" }
      ),
    key: "jsonToTsType",
    icon: renderIcon(BugSharp),
  },
];
</script>
<template>
  <n-layout has-sider class="h-full">
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="118"
      :width="240"
      :collapsed="collapsed"
      show-trigger="arrow-circle"
      content-style="padding: 24px;"
      bordered
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="24"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </n-layout-content>
  </n-layout>
</template>

<style scoped></style>
