import { defineStore } from 'pinia'

type MusicPlayerType = {
  id: number | null
  bStatus: "playing" | "pause"
}

export const usePlayerStore = defineStore('Player', () => {
  const playing = ref<MusicPlayerType>({
    id: null,
    bStatus: "pause",
  })

  function playMusic(id: number) {
    playing.value.id = id
  }

  function pauseMusic() {
    playing.value.id = null

  }

  return {
    playMusic, pauseMusic, playing
  }
})
