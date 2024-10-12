<script lang="ts" setup>
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <section>
    <el-skeleton animated />
    <br />
    <el-skeleton style="--el-skeleton-circle-size: 100px" animated>
      <template #template>
        <el-skeleton-item variant="circle" />
      </template>
    </el-skeleton>

    <label>
      <input type="checkbox" v-model="checked" class="size-6 accent-red-400" />
      checkbox
    </label>
  </section>
</template>
