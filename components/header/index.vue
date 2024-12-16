<template>
  <header
    class="fixed inset-x-0 top-0 z-10 rounded-b-3xl px-5 shadow-lg backdrop-blur-md backdrop-brightness-125 transition-all lg:mx-[calc(50%-490px)] xl:mx-[calc(50%-620px)]"
  >
    <div class="flex h-16 items-center justify-between">
      <div class="flex gap-0.5">
        <NuxtLink class="cursor-pointer-c" to="/login">
          <button class="btn rounded-r-none">Login</button>
        </NuxtLink>

        <NuxtLink class="cursor-pointer" to="/">
          <button class="btn btn-primary rounded-l-none">Home</button>
        </NuxtLink>
      </div>
      <div class="flex items-center gap-6">
        <NuxtLink
          class="link link-primary decoration-transparent"
          to="/about_me"
          >About Me</NuxtLink
        >
        <themeColor />
        <!-- <searchBar /> -->
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
// import searchBar from './components/search_bar.vue';
import themeColor from "~/components/header/components/theme_color.vue";
</script>
