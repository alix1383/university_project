<template>
  <div
    class="h-24 rounded-3xl px-4 justify-start items-center hover:shadow-none transition-all shadow-md bg-base-100 w-full flex ">
    <img :src="artwork" class="h-14 w-14 rounded-full object-cover" alt="">

    <div class="flex  flex-col ml-4">
      <div>
        <div class="font-bold text-2xl">{{ title }}</div>
        <div>{{ artist }}</div>
      </div>
    </div>

    <div class="ml-auto flex items-center">

      <button @click="() => { musicStore.playing = true; musicStore.changeMusic(id); musicStore.playMusic() }"
        v-if="id != Number(musicStore.playingNow.id) || musicStore.playing == false" class="btn btn-circle btn-outline">
        <playIcon />
      </button>

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