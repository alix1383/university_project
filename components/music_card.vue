<template>
  <div
    class="rounded-3xl hover:shadow-none bg-base-100 flex items-center justify-start w-full h-24 px-4 transition-all shadow-md">
    <img :src="artwork" class="h-14 w-14 object-cover rounded-full" :alt="`${artwork}-img`">

    <div class="flex flex-col ml-4">
      <div>
        <NuxtLink :to="`/music/${id}`">
          <div class="text-2xl font-bold cursor-pointer hover:text-info transition-colors">{{ title }}</div>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" :to="`/artist/${artist}`">
          <span class="hover:text-info transition-colors">{{ artist }}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="flex items-center ml-auto">
      <!-- @vue-ignore -->
      <button @click="() => { musicStore.playing = true; musicStore.changeMusic(id); musicStore.playMusic() }"
        v-if="id != Number(musicStore.playingNow.id) || musicStore.playing == false" class="btn btn-circle btn-outline">
        <playIcon />
      </button>
      <!-- @vue-ignore -->
      <button @click="() => { musicStore.playing = false; musicStore.pause() }"
        v-if="id == Number(musicStore.playingNow.id) && musicStore.playing == true" class="btn btn-circle btn-outline">
        <pauseIcon />
      </button>

    </div>
  </div>
</template>

<script lang="ts" setup>


const { artist, artwork, id, title, url } = defineProps<{
  "title": string,
  "artist": string,
  "artwork": string,
  "url": string,
  "id": number,
}>()



const musicStore = useMusicStore()

import playIcon from "@/components/icons/play.vue";
import pauseIcon from "@/components/icons/pause.vue";
</script>