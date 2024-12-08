<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input
      v-model="darkMode"
      false-value="fantasy"
      true-value="coffee"
      type="checkbox"
      class="theme-controller"
      checked
    />

    <!-- sun icon -->
    <SunIcon />

    <!-- moon icon -->
    <MoonIcon />
  </label>
</template>

<script lang="ts" setup>
import MoonIcon from "@/components/icons/moon.vue";
import SunIcon from "@/components/icons/sun.vue";

const darkMode = ref<"fantasy" | "coffee">("fantasy");

useHead({
  htmlAttrs: {
    "data-theme": darkMode,
  },
});
</script>
