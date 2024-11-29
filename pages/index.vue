<template>
  <div class="bg-base-200 rounded-3xl px-3 transition-shadow shadow-lg">
    <div class="flex flex-col gap-2 py-3">
      <musicCard v-for="music in musicStore.musicData" :artist="music.artist" :artwork="music.artwork"
        :title="music.title" :url="music.url" :id="Number(music.id)" />
    </div>
  </div>

</template>

<script lang="ts" setup>
import musicCard from "@/components/music_card.vue";

const musicStore = useMusicStore();
</script>