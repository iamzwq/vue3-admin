<script setup lang="ts">
import { watch } from "vue";
import { useSettingsStore } from "./stores";
import { ThemeEnum } from "./types/common";
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const settingsStore = useSettingsStore();

// 监听 store 中的 theme 字段，修改 html 标签的 class 属性, 实现主题切换
watch(
  () => settingsStore.theme,
  (newVal) => {
    const root = document.documentElement;
    root.classList.remove(ThemeEnum.Light, ThemeEnum.Dark);
    if (newVal === ThemeEnum.System) {
      const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ThemeEnum.Dark
        : ThemeEnum.Light;
      root.classList.add(systemMode);
    } else {
      root.classList.add(newVal);
    }
  },
  { immediate: true },
);
</script>

<template>
  <el-config-provider :locale="zhCn" :message="{ max: 3 }">
    <RouterView />
  </el-config-provider>
</template>
