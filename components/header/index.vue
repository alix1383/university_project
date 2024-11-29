<template>
  <header
    class="backdrop-brightness-125 shadow-lg top-0 z-10 fixed inset-x-0 rounded-b-3xl backdrop-blur-md  transition-all lg:mx-[calc(50%-490px)] xl:mx-[calc(50%-620px)]  px-5">

    <div class=" flex items-center justify-between h-16">

      <div class="flex gap-0.5 ">
        <NuxtLink to="/login">
          <button class="btn rounded-r-none">Login</button>
        </NuxtLink>

        <NuxtLink to="/">
          <button class="btn btn-primary rounded-l-none">Home</button>
        </NuxtLink>
      </div>
      <div class="flex gap-4">
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