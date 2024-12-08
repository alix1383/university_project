<template>
  <div class="flex mx-5 p-5 rounded-lg">
    <img :src="musicData.artwork"
      class="w-40 rounded-box shadow-md shadow-stone-700 hover:shadow-none transition-shadow"
      :alt="`${musicData.title}-img`" srcset="">

    <div class="flex gap-5 justify-between w-full ml-4">
      <div class="flex flex-col">
        <span class="font-extrabold text-3xl">{{ musicData.title }}</span>
        <span class="font-bold text-2xl italic"><span>By: </span>{{ musicData.artist }}</span>
        <span class="font-bold text-2xl italic">{{ musicData.year }}</span>
      </div>
      <div class="flex items-center">
        <!-- @vue-ignore -->
        <button @click="() => { musicStore.playing = true; musicStore.changeMusic(musicId); musicStore.playMusic() }"
          v-if="musicId != Number(musicStore.playingNow.id) || musicStore.playing == false"
          class="btn w-16 h-16 btn-circle btn-outline">
          <playIcon />
        </button>
        <!-- @vue-ignore -->
        <button @click="() => { musicStore.playing = false; musicStore.pause() }"
          v-if="musicId == Number(musicStore.playingNow.id) && musicStore.playing == true"
          class="btn w-16 h-16 btn-circle btn-outline">
          <pauseIcon />
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import playIcon from "@/components/icons/play.vue";
import pauseIcon from "@/components/icons/pause.vue";
const route = useRoute()
const musicId = route.params.id

const musicStore = useMusicStore();

var musicData = ref()

musicStore.musicData.forEach((item) => {
  if (item.id == musicId) {
    musicData.value = item

  }
})

console.log(musicData.value);

</script>