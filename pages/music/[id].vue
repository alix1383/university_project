<template>
  <div class="mx-5 flex rounded-lg p-5">
    <img
      :src="musicData.artwork"
      class="h-40 w-40 rounded-box shadow-md shadow-stone-700 transition-shadow hover:shadow-none"
      :alt="`${musicData.title}-img`"
    />

    <div class="ml-4 flex w-full justify-between gap-5">
      <div class="flex flex-col">
        <span class="text-3xl font-extrabold">{{ musicData.title }}</span>
        <span class="text-2xl font-bold italic"
          ><span>By: </span>{{ musicData.artist }}</span
        >
        <span class="text-2xl font-bold italic">{{ musicData.year }}</span>
      </div>
      <div class="flex items-center">
        <!-- @vue-ignore -->
        <button
          @click="
            () => {
              musicStore.playing = true;
              musicStore.changeMusic(musicId);
              musicStore.playMusic();
            }
          "
          v-if="
            musicId != Number(musicStore.playingNow.id) ||
            musicStore.playing == false
          "
          class="btn btn-circle btn-outline h-16 w-16"
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
            musicId == Number(musicStore.playingNow.id) &&
            musicStore.playing == true
          "
          class="btn btn-circle btn-outline h-16 w-16"
        >
          <pauseIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import playIcon from "@/components/icons/play.vue";
import pauseIcon from "@/components/icons/pause.vue";
const route = useRoute();
const musicId = route.params.id;

const musicStore = useMusicStore();

var musicData = ref();

musicStore.musicData.forEach((item) => {
  if (item.id == musicId) {
    musicData.value = item;
  }
});
</script>
