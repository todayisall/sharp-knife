<script setup lang="ts">
import { onMounted, ref } from "vue";
import { NButton, useMessage } from "naive-ui";

import { EditorView, basicSetup } from "codemirror";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { lintGutter, setDiagnostics } from "@codemirror/lint";

import * as prettier from "prettier";
import * as parserBabel from "prettier/parser-babel";
import estreeParser from "prettier/plugins/estree";

const message = useMessage();
const inputJson = ref("");
const formattedJson = ref<string>("");
const view = ref<EditorView>();

const formatJson = async () => {
  if (!view.value) return;

  //  对json进行格式化
  const formatted = await prettier.format(view.value.state.doc.toString(), {
    parser: "json",
    plugins: [parserBabel, estreeParser],
  });
  formattedJson.value = formatted;
};

const linterJson = async () => {
  if (!view.value) return;

  // 对格式化后的json进行语法检查
  const lint = jsonParseLinter();

  view.value.dispatch(setDiagnostics(view.value?.state!, lint(view.value!)));
};

// 使用codemirror 代码高亮,格式化json
onMounted(() => {
  view.value = new EditorView({
    doc: inputJson.value,
    extensions: [
      basicSetup,
      json(),
      lintGutter(),
      EditorView.updateListener.of((v) => {
        if (v.docChanged) {
          linterJson();
          formatJson();
        }
      }),
    ],
    parent: document.querySelector(".source-code")!,
  });
  view.value.focus();
});

const handleCopy = () => {
  navigator.clipboard.writeText(formattedJson.value);
  message.success("复制成功");
};
</script>
<template>
  <div class="flex h-full">
    <div class="flex-1">
      <div class="source-code"></div>
    </div>
    <div class="px-2">
      <n-button @click="formatJson">格式化</n-button>
    </div>
    <pre class="flex-1 border overflow-auto" @click="handleCopy">
      {{ formattedJson }}
      </pre
    >
  </div>
</template>

<style scoped></style>
