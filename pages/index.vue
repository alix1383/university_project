<template>
  <div class="py-3 flex flex-col gap-2">
    <musicCard v-for="music in musics" :artist="music.artist" :artwork="music.artwork" :title="music.title"
      :url="music.url" :id="Number(music.id)" />
  </div>

</template>

<script lang="ts" setup>
import musicCard from "@/components/music_card.vue";

type MusicDataType = {
  "title": string,
  "artist": string,
  "artwork": string,
  "url": string,
  "id": string
}

const musicStore = useMusicStore();

// Fetch Data From Github Repo
const { data } = await useFetch('https://raw.githubusercontent.com/ShivamJoker/sample-songs/refs/heads/master/data.json')
// Convert Json To Object
const musics: MusicDataType[] = JSON.parse(data.value as string);

musicStore.musicData = musics
musicStore.playingNow = musicStore.musicData[0]
</script>