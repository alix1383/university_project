import { defineStore } from 'pinia'

type MusicDataType = {
  title: string,
  artist: string,
  artwork: string,
  url: string,
  id: string
}

if (window) {
  var audio = new Audio();
  audio.volume = 0.35
  audio.loop = false
}


export const useMusicStore = defineStore('Music', () => {
  const musicData = ref<MusicDataType[]>([])
  const playing = ref<boolean>(false)
  const playingNow = ref<MusicDataType | null>(null)

  function changeMusic(id: number) {
    if (musicData.value.length > 0) {
      playingNow.value = musicData.value[id - 1] || null
    }
  }

  function playMusic() {
    if (audio.src != playingNow.value?.url) {

      if (playingNow.value?.url) {
        audio.src = playingNow.value?.url;
      }


    }

    audio.play()


  }

  function pause() {
    audio.pause()
  }

  function next() {

    if (musicData.value.length - Number(playingNow.value?.id) == 0) {
      playingNow.value = musicData.value[0]
    }

    playingNow.value = musicData.value[(Number(playingNow.value?.id))]

    playMusic()
  }

  function previous() {
    if (!playingNow.value || !musicData.value || musicData.value.length === 0) {
      return;
    }

    const currentId = Number(playingNow.value?.id);

    if (currentId === 1) {
      // If the current track is the first one, go to the last track
      playingNow.value = musicData.value[musicData.value.length - 1];
    } else {
      // Go to the previous track
      playingNow.value = musicData.value[currentId - 2];
    }

    playMusic();
  }


  function getTime() {

    return {
      duration: audio.duration,
      currentTime: audio.currentTime
    }

  }

  function volume(volume: number) {
    audio.volume = volume
  }

  return { musicData, playingNow, playing, changeMusic, playMusic, pause, next, getTime, previous, volume }
})
