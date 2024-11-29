<template>

  <nav :class="[musicStore.playing ? 'bottom-0' : '-bottom-32']"
    class="basis-1/3 rounded-t-3xl backdrop-brightness-95 backdrop-blur-2xl md:flex-row md:px-10 fixed inset-x-0 flex flex-col items-center justify-between h-32 mx-3 transition-all duration-500">

    <div class="basis-1/3 flex mt-2">
      <img :src="musicStore.playingNow?.artwork" class="md:w-20 md:h-20 object-cover w-12 h-12 rounded-full"
        :alt="`${musicStore.playingNow?.title} + Image`">
      <div class="flex flex-col justify-center ml-4">
        <div>
          <div class="md:text-2xl text-xl font-bold"> {{ musicStore.playingNow?.title }} </div>
          <div> {{ musicStore.playingNow?.artist }}</div>
        </div>
      </div>
    </div>

    <div class="basis-1/3 flex flex-col items-center">
      <div class="flex items-center gap-5">
        <div>{{ timeProgress }}</div>

        <progress class=" progress progress-primary md:w-64 w-40" :value="progress" max="100"></progress>

        <div>{{ duration }}</div>
      </div>

      <div class="flex gap-10">
        <span class="cursor-pointer" @click="musicStore.previous">
          <Arrow class="w-12 h-12 rotate-180" />
        </span>
        <!-- <Stop class="w-12 h-12" /> -->
        <!-- <Pause class="w-12 h-12" /> -->
        <!-- <play class="w-12 h-12" /> -->
        <span class="cursor-pointer" @click="musicStore.next">
          <Arrow class="w-12 h-12" />
        </span>
      </div>


    </div>

    <div class="basis-1/4 md:flex items-center hidden gap-5">
      <Volume />
      <input @input="() => musicStore.volume(volume)" v-model="volume" type="range" min="0.0" max="1.0" step=".01"
        class="range" />
    </div>
  </nav>

</template>

<script lang="ts" setup>


import Arrow from '@/components/icons/arrow.vue';
// import Pause from '@/components/icons/pause.vue';
// import Play from '@/components/icons/play.vue';
// import Stop from '@/components/icons/stop.vue';
import Volume from '@/components/icons/volume.vue';

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
  if (isNaN(data.duration)) {
    data.duration = 0
  }

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