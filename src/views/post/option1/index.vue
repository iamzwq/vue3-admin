<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <div>post option1</div>
  <div class="w-96">
    <el-input type="text" v-model="value" />
  </div>
</template>
