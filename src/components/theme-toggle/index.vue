<script lang="ts" setup>
import { useSettingsStore } from "@/stores";
import ComputerIcon from "@/assets/icons/computer.svg";
import LightIcon from "@/assets/icons/light.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import { ThemeEnum } from "@/types/common";

const settingsStore = useSettingsStore();
</script>

<template>
  <el-dropdown trigger="click" class="ml-auto" size="large">
    <div class="text-xl">
      <ComputerIcon v-if="settingsStore.theme === ThemeEnum.System" />
      <LightIcon v-else-if="settingsStore.theme === ThemeEnum.Light" />
      <MoonIcon v-else />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="settingsStore.setTheme(ThemeEnum.Light)">
          <el-icon><LightIcon /></el-icon>
          亮色模式
        </el-dropdown-item>
        <el-dropdown-item @click="settingsStore.setTheme(ThemeEnum.Dark)">
          <el-icon><MoonIcon /></el-icon>
          暗黑模式
        </el-dropdown-item>
        <el-dropdown-item @click="settingsStore.setTheme(ThemeEnum.System)">
          <el-icon><ComputerIcon /></el-icon>
          跟随系统
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
