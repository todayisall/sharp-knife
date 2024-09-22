<script setup lang="ts">
import { ref } from 'vue';
import { NInput } from 'naive-ui';
const inputJson = ref('');
const formattedJson = ref('');
const formatJson = () => {
    try {
        formattedJson.value = JSON.stringify(JSON.parse(inputJson.value), null, 2);
    } catch (e) {
        formattedJson.value = 'JSON 格式错误';
    }
};
</script>
<template>
    <div class="json-format">
        <n-input class="input-area" v-model:value="inputJson" type="textarea" placeholder="输入 JSON 字符串" />
        <button @click="formatJson">格式化</button>
        <pre class="output-area">{{ formattedJson }}</pre>
    </div>
</template>


<style scoped>
.json-format {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 100%;
}
</style>