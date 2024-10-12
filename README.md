# Vite + Vue3

通过 `npn create vite@latest` 创建项目

## 添加 eslint + prettier

```bash
npm init @eslint/config@latest
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev --save-exact prettier
```

更新eslint 配置文件

```js
// ...
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  // ...
  eslintPluginPrettierRecommended,
];
```

## 添加 husky 和 lint-staged

```bash
npm install --save-dev husky lint-staged
git init
npx husky init
```

## 添加 tailwindcss

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p --ts
```
