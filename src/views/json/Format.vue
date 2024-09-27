<script setup lang="ts">
import { ref } from "vue";
import { NInput, NButton } from "naive-ui";
const inputJson = ref("");
const formattedJson = ref("");
const formatJson = () => {
  if (!inputJson.value) {
    formattedJson.value = "";
    return;
  }

  try {
    formattedJson.value = JSON.stringify(JSON.parse(inputJson.value), null, 2);
  } catch (e) {
    formattedJson.value = "JSON 格式错误";
  }
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
      <n-button @click="formatJson">格式化</n-button>
    </div>
    <pre class="flex-1 border overflow-auto">{{ formattedJson }}</pre>
  </div>
</template>

<style scoped></style>
