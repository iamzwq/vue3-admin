<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const matchedRoutes = computed(() =>
  route.matched.filter((item) => item.path !== "/" && item.path !== "/home" && item.meta.title),
);
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item key="/home">
      <RouterLink to="/home" class="cursor-pointer">首页</RouterLink>
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in matchedRoutes" :key="item.path">
      <RouterLink :to="item.path" class="cursor-pointer">{{ item.meta.title }}</RouterLink>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
