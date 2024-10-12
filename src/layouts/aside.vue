<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { Menu } from "@element-plus/icons-vue";
import { useSettingsStore } from "@/stores";

const route = useRoute();
const settingsStore = useSettingsStore();

const asideWidth = computed(() => (settingsStore.isAsideCollapse ? "64px" : "200px"));
</script>

<template>
  <el-aside class="transition-[width] ease-out duration-300 flex flex-col" :width="asideWidth">
    <RouterLink to="/home">
      <img class="h-[60px] bg-gray-300" src="https://picsum.photos/200/60" />
    </RouterLink>
    <el-menu
      :default-active="route.path"
      class="el-menu-vertical-demo flex-1"
      :collapse="settingsStore.isAsideCollapse"
      router
    >
      <el-menu-item index="/home">
        <el-icon><Menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/about">
        <el-icon><Menu /></el-icon>
        <template #title>Navigator About</template>
      </el-menu-item>
      <el-sub-menu index="/post">
        <template #title>
          <el-icon><Menu /></el-icon>
          <span>嵌套菜单</span>
        </template>
        <el-menu-item index="/post/option-1">Option 1</el-menu-item>
        <el-menu-item index="/post/option-2">Option 2</el-menu-item>
        <el-menu-item index="/post/option-3">Option 3</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
