<script lang="ts" setup>
import Aside from "./aside.vue";
import Header from "./header.vue";
</script>

<template>
  <el-container class="h-screen">
    <Aside />
    <el-container class="is-vertical">
      <Header />
      <el-main>
        <RouterView v-slot="{ Component, route }">
          <Transition name="slide-fade" mode="out-in" appear>
            <KeepAlive>
              <component
                :is="Component"
                :key="route.fullPath + (route.meta.keepAlive ? '' : Math.random())"
              />
            </KeepAlive>
          </Transition>
        </RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>
