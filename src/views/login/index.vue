<script lang="ts" setup>
import { reactive, useTemplateRef } from "vue";
import { useRouter } from "vue-router";
import { Lock, User } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import ThemeToggle from "@/components/theme-toggle/index.vue";
import VueIcon from "@/assets/icons/vue.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import TencentQQIcon from "@/assets/icons/tencent-qq.svg";
import WechatIcon from "@/assets/icons/wechat.svg";
import AppleIcon from "@/assets/icons/apple.svg";

const router = useRouter();
const formRef = useTemplateRef<FormInstance>("formRef");

const form = reactive({
  name: "",
  password: "",
  rememberPassword: false,
});

const rules = reactive<FormRules<typeof form>>({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  rememberPassword: [{ required: false }],
});
const onSubmit = () => {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      router.push("/home");
      setTimeout(() => {
        ElNotification({
          title: `Hi, ${form.name}`,
          message: "欢迎回来!",
          type: "success",
        });
      }, 1000);
    } else {
      console.log("error submit!", fields); // eslint-disable-line no-console
    }
  });
};
</script>

<template>
  <section class="flex h-screen">
    <div class="bg-black/90 w-5/12 flex">
      <VueIcon class="size-36 m-auto animate-bounce" />
    </div>
    <div class="w-7/12 flex">
      <div class="absolute top-6 right-8">
        <ThemeToggle />
      </div>
      <el-card class="w-5/12 m-auto h-auto">
        <template #header>
          <div class="flex justify-center py-2 text-xl font-bold">Vue3 Project</div>
        </template>
        <el-form
          :model="form"
          label-width="auto"
          size="large"
          autocomplete="off"
          @submit.prevent="onSubmit"
          :rules="rules"
          hide-required-asterisk
          ref="formRef"
        >
          <el-input class="invisible !fixed -top-[100vh]" />
          <el-input class="invisible !fixed -top-[100vh]" type="password" />
          <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名">
              <template #prepend><el-button :icon="User" class="!p-0" /></template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" type="password">
              <template #prepend><el-button :icon="Lock" class="!p-0" /></template>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="rememberPassword">
            <label class="flex items-center gap-2">
              <el-checkbox v-model="form.rememberPassword" />
              记住密码
            </label>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit" class="w-full">登录</el-button>
          </el-form-item>
        </el-form>
        <el-divider class="mt-8 custom-divide">其他登录方式</el-divider>
        <div class="flex justify-center gap-6 text-2xl py-2">
          <TencentQQIcon class="cursor-pointer" />
          <WechatIcon class="cursor-pointer" />
          <GoogleIcon class="cursor-pointer" />
          <AppleIcon class="cursor-pointer" />
        </div>
      </el-card>
    </div>
  </section>
</template>

<style>
.custom-divide :deep(.el-divider__text) {
  font-size: 16px;
}
</style>
