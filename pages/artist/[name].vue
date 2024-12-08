<template>
  <div class="rounded-3xl bg-base-200 px-3 shadow-lg transition-shadow">
    <div class="flex flex-col gap-2 py-3">
      <musicCard
        v-for="music in musicsFiltered"
        :artist="music.artist"
        :artwork="music.artwork"
        :title="music.title"
        :url="music.url"
        :id="Number(music.id)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
type MusicDataType = {
  title: string;
  artist: string;
  artwork: string;
  url: string;
  id: string;
};

const route = useRoute();
const name = route.params.name;
const musicStore = useMusicStore();
const musics = musicStore.musicData;
const musicsFiltered = ref<MusicDataType[]>([]);

musics.forEach((item) => {
  if (item.artist == name) {
    musicsFiltered.value.push(item);
  }
});
</script>
