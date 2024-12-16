<template>
  <nav
    :class="[musicStore.playing ? 'bottom-0' : '-bottom-32']"
    class="fixed inset-x-0 mx-3 flex h-32 basis-1/3 flex-col items-center justify-between rounded-t-3xl backdrop-blur-2xl backdrop-brightness-95 transition-all duration-500 md:flex-row md:px-10"
  >
    <div class="mt-2 flex basis-1/3">
      <img
        :src="musicStore.playingNow?.artwork"
        class="h-12 w-12 rounded-full object-cover md:h-20 md:w-20"
        :alt="`${musicStore.playingNow?.title} + Image`"
      />
      <div class="ml-4 flex flex-col justify-center">
        <div>
          <div class="text-xl font-bold md:text-2xl">
            {{ musicStore.playingNow?.title }}
          </div>
          <div>{{ musicStore.playingNow?.artist }}</div>
        </div>
      </div>
    </div>

    <div class="flex basis-1/3 flex-col items-center">
      <div class="flex items-center gap-5">
        <div>{{ timeProgress }}</div>

        <progress
          class="progress progress-primary w-40 md:w-64"
          :value="progress"
          max="100"
        ></progress>

        <div>{{ duration }}</div>
      </div>

      <div class="flex gap-10">
        <span class="cursor-pointer" @click="musicStore.previous">
          <Arrow class="h-12 w-12 rotate-180" />
        </span>

        <span class="cursor-pointer" @click="musicStore.next">
          <Arrow class="h-12 w-12" />
        </span>
      </div>
    </div>

    <div class="hidden basis-1/4 items-center gap-5 md:flex">
      <Volume />
      <input
        @input="() => musicStore.volume(volume)"
        v-model="volume"
        type="range"
        min="0.0"
        max="1.0"
        step=".01"
        class="range"
      />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import Arrow from "@/components/icons/arrow.vue";

import Volume from "@/components/icons/volume.vue";

if (window) {
  setInterval(c, 1000);
}

const volume = ref(0.35);
const musicStore = useMusicStore();
const progress = ref(0);
const timeProgress = ref("00:00");
const duration = ref("00:00");

function c() {
  const data = musicStore.getTime();
  if (isNaN(data.duration)) {
    data.duration = 0;
  }

  progress.value = calculatePercent(data.duration, data.currentTime);
  timeProgress.value = formatTime(String(data.currentTime));
  duration.value = formatTime(String(data.duration));

  if (progress.value == 100) {
    musicStore.next();
  }
}

function calculatePercent(duration: number, currentTime: number) {
  return Number(((currentTime * 100) / duration).toFixed());
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
  let formattedMinutes: string = String(minutes).padStart(2, "0");
  let formattedSeconds: string = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
</script>
