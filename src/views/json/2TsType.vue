<script setup lang="ts">
import { ref } from "vue";
import { NInput, NButton } from "naive-ui";
import { invoke } from "@tauri-apps/api/core";

const inputJson = ref("");
const formattedJson = ref("");
const formatJson = () => {
  if (!inputJson.value) {
    formattedJson.value = "";
    return;
  }

  invoke("convert_json2ts", { jsonString: inputJson.value })
    .then((res) => {
      formattedJson.value = res;
    })
    .catch(() => {
      formattedJson.value = "JSON 格式错误";
    });

  // try {
  //   // 将 JSON 对象转换为 TypeScript 类型
  //   const json = JSON.parse(inputJson.value);
  //   const keys = Object.keys(json);
  //   const type = keys
  //     .map((key) => {
  //       const value = json[key];
  //       const valueType = typeof value;
  //       if (valueType === "object") {
  //         if (Array.isArray(value)) {
  //           return `${key}?: ${valueType}[];`;
  //         }
  //         return `${key}: {${Object.keys(value)
  //           .map((k) => `${k}: ${typeof value[k]};`)
  //           .join(" ")}};`;
  //       }
  //       return `${key}?: ${valueType};`;
  //     })
  //     .join("\n");

  //   formattedJson.value = `interface Json {\n${type}\n}`;
  // } catch (e) {
  //   formattedJson.value = "JSON 格式错误";
  // }
};
</script>
<template>
  <div class="flex h-full">
    <n-input
      class="flex-1"
      @blur="formatJson"
      v-model:value="inputJson"
      type="textarea"
      placeholder="输入 JSON 字符串"
    />
    <div class="px-2">
      <n-button @click="formatJson">2 Ts</n-button>
    </div>
    <pre class="flex-1 border overflow-auto">{{ formattedJson }}</pre>
  </div>
</template>

<style scoped></style>
