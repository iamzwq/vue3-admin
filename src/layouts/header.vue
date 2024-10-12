<script lang="ts" setup>
import { useRouter } from "vue-router";
import { SwitchButton } from "@element-plus/icons-vue";
import { useSettingsStore } from "@/stores";
import ThemeToggle from "@/components/theme-toggle/index.vue";
import MenuUnfoldIcon from "@/assets/icons/menu-unfold.svg";
import MenuFoldIcon from "@/assets/icons/menu-fold.svg";
import BreadCrumb from "./bread-crumb.vue";

const settingsStore = useSettingsStore();

const router = useRouter();
</script>

<template>
  <el-header
    class="flex items-center gap-4 sticky top-0 z-[1999] border-b border-b-[--el-menu-border-color]"
  >
    <div class="text-2xl cursor-pointer p-1" @click="settingsStore.toggleIsAsideCollapse">
      <MenuUnfoldIcon v-if="settingsStore.isAsideCollapse" />
      <MenuFoldIcon v-else />
    </div>
    <BreadCrumb />
    <div class="flex gap-4 items-center ml-auto">
      <el-tooltip content="切换主题">
        <ThemeToggle />
      </el-tooltip>
      <el-dropdown trigger="click" size="large">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="() => router.replace('/login')">
              <el-icon><SwitchButton /></el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
