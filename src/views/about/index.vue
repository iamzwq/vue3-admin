<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <section>
    <div>about page</div>
    <div class="w-96">
      <el-input type="text" v-model="value" />
    </div>
  </section>
</template>

<style scoped></style>
