<script setup lang="ts">
import { onMounted, ref } from "vue";
import { NButton } from "naive-ui";

import { EditorView, basicSetup } from "codemirror";
import { json, jsonLanguage } from "@codemirror/lang-json";

const inputJson = ref("");
const formattedJson = ref<string[] | string>([]);
const view = ref<EditorView | null>(null);
const formatJson = () => {
  if (!view.value?.state.doc.toString()) {
    formattedJson.value = [];
    return;
  }

  formattedJson.value = view.value?.state.doc.toString() || "";
};
// 使用codemirror 代码高亮,格式化json
onMounted(() => {
  view.value = new EditorView({
    doc: inputJson.value,
    extensions: [basicSetup, json(), jsonLanguage],
    parent: document.querySelector(".source-code")!,
  });
  view.value.focus();
});
</script>
<template>
  <div class="flex h-full">
    <div class="flex-1">
      <div class="source-code"></div>
    </div>
    <div class="px-2">
      <n-button @click="formatJson">格式化</n-button>
    </div>
    <pre class="flex-1 border overflow-auto">{{ formattedJson }}</pre>
  </div>
</template>

<style scoped></style>
