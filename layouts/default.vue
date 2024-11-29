<template>
  <AppHeader />

  <main class="mt-20 mb-32 inset-x-0 lg:mx-[calc(50%-490px)] xl:mx-[calc(50%-620px)] ">
    <slot />
  </main>

  <Navbar />
</template>

<script lang="ts" setup>

import AppHeader from "@/components/header/index.vue";
import Navbar from "@/components/navbar/navbar.vue";

type MusicDataType = {
  "title": string,
  "artist": string,
  "artwork": string,
  "url": string,
  "id": string
}

// Fetch Data From Github Repo
const { data } = await useFetch('https://raw.githubusercontent.com/alix1383/sample-songs/refs/heads/master/data.json')
// Convert Json To Object
const musics: MusicDataType[] = JSON.parse(data.value as string);
const musicStore = useMusicStore()
musicStore.musicData = musics
musicStore.playingNow = musicStore.musicData[0]

</script>