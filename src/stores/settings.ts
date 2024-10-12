import { defineStore } from "pinia";
import type { ThemeEnum } from "@/types/common";

export const useSettingsStore = defineStore("settings", {
  state: () => ({ isAsideCollapse: false, theme: "system" }),
  actions: {
    toggleIsAsideCollapse() {
      this.isAsideCollapse = !this.isAsideCollapse;
    },
    setTheme(theme: ThemeEnum) {
      this.theme = theme;
    },
  },
  persist: {
    pick: ["isAsideCollapse", "theme"],
  },
});
