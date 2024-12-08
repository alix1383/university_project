<template>
  <div
    class="flex h-24 w-full items-center justify-start rounded-3xl bg-base-100 px-4 shadow-md transition-all hover:shadow-none"
  >
    <img
      :src="artwork"
      class="h-14 w-14 rounded-full object-cover"
      :alt="`${artwork}-img`"
    />

    <div class="ml-4 flex flex-col">
      <div>
        <NuxtLink :to="`/music/${id}`">
          <div
            class="cursor-pointer text-2xl font-bold transition-colors hover:text-info"
          >
            {{ title }}
          </div>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" :to="`/artist/${artist}`">
          <span class="transition-colors hover:text-info">{{ artist }}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="ml-auto flex items-center">
      <!-- @vue-ignore -->
      <button
        @click="
          () => {
            musicStore.playing = true;
            musicStore.changeMusic(id);
            musicStore.playMusic();
          }
        "
        v-if="
          id != Number(musicStore.playingNow.id) || musicStore.playing == false
        "
        class="btn btn-circle btn-outline"
      >
        <playIcon />
      </button>
      <!-- @vue-ignore -->
      <button
        @click="
          () => {
            musicStore.playing = false;
            musicStore.pause();
          }
        "
        v-if="
          id == Number(musicStore.playingNow.id) && musicStore.playing == true
        "
        class="btn btn-circle btn-outline"
      >
        <pauseIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { artist, artwork, id, title, url } = defineProps<{
  title: string;
  artist: string;
  artwork: string;
  url: string;
  id: number;
}>();

const musicStore = useMusicStore();

import playIcon from "@/components/icons/play.vue";
import pauseIcon from "@/components/icons/pause.vue";
</script>
