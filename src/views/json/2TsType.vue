<script setup lang="ts">
import { ref } from "vue";
import { NInput, NButton } from "naive-ui";
import { run } from "json_typegen_wasm";

import * as prettier from "prettier";
import * as parserBabel from "prettier/parser-babel";
import estreeParser from "prettier/plugins/estree";

const inputJson = ref("");
const formattedJson = ref("");

const transformer = async () => {
  if (!inputJson.value) {
    formattedJson.value = "";
    return;
  }
  // json java对象转换为json 数据
  const formatted = await prettier.format(inputJson.value, {
    parser: "json",
    plugins: [parserBabel, estreeParser],
  });

  formattedJson.value = run(
    "Root",
    formatted,
    JSON.stringify({
      output_mode: "typescript",
    })
  );
};
</script>
<template>
  <div class="flex h-full">
    <n-input
      class="flex-1"
      @blur="transformer"
      v-model:value="inputJson"
      type="textarea"
      placeholder="输入 JSON 字符串"
      @update:value="transformer"
    />
    <div class="px-2">
      <n-button @click="transformer">2 Ts</n-button>
    </div>
    <pre class="flex-1 border overflow-auto">{{ formattedJson }}</pre>
  </div>
</template>

<style scoped></style>
