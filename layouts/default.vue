<template>
  <div>
    <!-- Player most be render in Client side -->
    <ClientOnly>
      <Player />
    </ClientOnly>
    <!--  -->

    <AppHeader />

    <main
      class="mt-20 mb-32 shadow-lg  inset-x-0 rounded-3xl backdrop-blur-md  transition-all lg:mx-[calc(50%-490px)] xl:mx-[calc(50%-620px)] bg-base-200 px-3">
      <slot />
    </main>

    <Navbar />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/header/index.vue";
import Navbar from "@/components/navbar/navbar.vue";
</script>