<template>

  <nav :class="[musicStore.playing ? 'bottom-0' : '-bottom-28']"
    class="flex basis-1/3 items-center justify-between fixed pl-5 pr-28 h-28 rounded-t-3xl mx-3 inset-x-0 backdrop-brightness-95 backdrop-blur-2xl  transition-all duration-500">

    <div class="flex basis-1/3">
      <img :src="musicStore.playingNow?.artwork" class="h-20 w-20 rounded-full object-cover"
        :alt="`${musicStore.playingNow?.title} + Image`">
      <div class="flex justify-center flex-col ml-4">
        <div>
          <div class="font-bold text-2xl"> {{ musicStore.playingNow?.title }} </div>
          <div> {{ musicStore.playingNow?.artist }}</div>
        </div>
      </div>
    </div>

    <div class="basis-1/3  flex flex-col items-center">
      <div class="flex items-center gap-5">
        <div>{{ timeProgress }}</div>

        <progress class=" progress progress-primary w-64" :value="progress" max="100"></progress>

        <div>{{ duration }}</div>
      </div>

      <div class="flex ">
        <span class="cursor-pointer" @click="musicStore.previous">
          <Arrow class="rotate-180 h-12 w-12" />
        </span>
        <!-- <Stop class="w-12 h-12" /> -->
        <!-- <Pause class="w-12 h-12" /> -->
        <!-- <play class="w-12 h-12" /> -->
        <span class="cursor-pointer" @click="musicStore.next">
          <Arrow class="w-12 h-12" />
        </span>
      </div>


    </div>

    <div class="basis-1/4 flex items-center gap-5">
      <Volume />
      <input @input="() => musicStore.volume(volume)" v-model="volume" type="range" min="0.0" max="1.0" step=".01"
        class="range" />
    </div>
  </nav>

</template>

<script lang="ts" setup>


import Arrow from './icons/arrow.vue';
// import Pause from './icons/pause.vue';
// import Play from './icons/play.vue';
// import Stop from './icons/stop.vue';
import Volume from './icons/volume.vue';

if (window) {
  setInterval(c, 1000);
}

const volume = ref(0.35)
const musicStore = useMusicStore();
const progress = ref(0)
const timeProgress = ref("00:00")
const duration = ref("00:00")

function c() {
  const data = musicStore.getTime()
  progress.value = calculatePercent(data.duration, data.currentTime);
  timeProgress.value = formatTime(String(data.currentTime))
  duration.value = formatTime(String(data.duration))

  if (progress.value == 100) {
    musicStore.next()
  }
}


function calculatePercent(duration: number, currentTime: number) {
  return Number((currentTime * 100 / duration).toFixed())
}

function formatTime(timeString: string): string {
  // Extract the number part from the string and convert it to a float
  let seconds: number = parseFloat(timeString);

  // Convert seconds to integer seconds
  let wholeSeconds: number = Math.floor(seconds);

  // Calculate minutes and remaining seconds
  let minutes: number = Math.floor(wholeSeconds / 60);
  let remainingSeconds: number = wholeSeconds % 60;

  // Pad minutes and seconds with leading zeros if necessary
  let formattedMinutes: string = String(minutes).padStart(2, '0');
  let formattedSeconds: string = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}


</script>