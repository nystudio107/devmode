<template>
  <div
    id="single-song-player"
    aria-label="Audio Player"
    role="region"
  >
    <div class="bottom-container flex items-center">
      <div class="control-container flex-shrink">
        <button
          id="play-pause"
          :aria-label="playing == true ? 'Pause' : 'Play'"
          :title="playing == true ? 'Pause' : 'Play'"
          aria-controls="audiofile"
          class="amplitude-play-pause"
          href="#"
          role="button"
          @click.prevent="playing = !playing"
        >
          <div class="text-devmode-pink text-4xl cursor-pointer">
            <i
              v-show="!playing"
              class="icon-play"
            />
            <i
              v-show="playing"
              class="icon-pause"
            />
          </div>
        </button>
        <div class="block sm:hidden text-center time-container pr-3 pl-1">
          <span class="current-time text-devmode-pink font-mono text-xs text-left">
                        &nbsp;
          </span>
        </div>
      </div>

      <div class="hidden sm:block time-container flex-shrink pr-3 pl-1">
        <span class="current-time text-devmode-pink font-mono text-xs text-left">
          {{ currentTime }}
        </span>
      </div>

      <div class="flex-grow px-1 pt-0">
        <input
          id="song-played-progress"
          v-model="currentSeconds"
          :aria-valuemax="durationSeconds"
          :aria-valuenow="Math.round(currentSeconds)"
          :max="durationSeconds"
          :style="rangeStyle"
          aria-controls="audiofile"
          aria-valuemin="0"
          aria-valuetext="Audio seek bar"
          class="amplitude-song-played-progress w-full h-3 rounded"
          min="0"
          role="slider"
          tabIndex="0"
          title="Audio seek bar"
          type="range"
          @input="seek"
        >
        <div class="block sm:hidden text-center time-container pr-1 pl-1 whitespace-no-wrap">
          <span class="current-time text-devmode-pink font-mono text-xs text-left">
            {{ currentTime }} / {{ durationTime }}
          </span>
        </div>
      </div>

      <div class=" time-container flex-shrink pl-3 pr-1 pb-5 sm:pb-0">
        <div class="playback font-mono flex justify-center leading-none">
          <button
            id="decrease-playback"
            :aria-disabled="playbackRate <= playbackRateMin"
            :class="{ 'opacity-50 cursor-not-allowed' : playbackRate <= playbackRateMin }"
            :disabled="playbackRate <= playbackRateMin"
            aria-label="Decrease playback rate"
            class="bg-devmode-pink text-sm text-white hover:text-black focus:text-black text-center w-6 rounded-l-xl"
            @click.prevent="playbackRateDown"
          >
            -
          </button>

          <span class="bg-devmode-yellow text-devmode-pink text-xs text-center p-1 sm:w-24">{{ playbackRate }}x<span
            class="hidden sm:inline"
          > speed</span></span>

          <button
            id="increase-playback"
            :aria-disabled="playbackRate >= playbackRateMax"
            :class="{ 'opacity-50 cursor-not-allowed' : playbackRate >= playbackRateMax }"
            :disabled="playbackRate >= playbackRateMax"
            aria-label="Increase playback rate"
            class="bg-devmode-pink text-sm text-white hover:text-black focus:text-black text-center w-6 rounded-r-xl"
            @click.prevent="playbackRateUp"
          >
            +
          </button>
        </div>
      </div>

      <div class="hidden sm:block time-container flex-shrink pl-3 pr-1">
        <span class="duration text-devmode-pink font-mono text-xs text-left">
          {{ durationTime }}
        </span>
      </div>
    </div>
    <audio
      id="audiofile"
      ref="audiofile"
      :autoplay="autoPlay"
      :loop="innerLoop"
      :src="url"
      preload="none"
      style="display: none;"
    />
  </div>
</template>

<script>
const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

  return hhmmss;
};

// Our component exports
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    artist: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    audio: undefined,
    currentSeconds: 0,
    durationSeconds: 0,
    innerLoop: false,
    loaded: false,
    playing: false,
    previousVolume: 35,
    showVolume: false,
    volume: 100,
    playbackRate: 1.0,
    playbackRateMin: 0.5,
    playbackRateMax: 2.0,
  }),
  computed: {
    currentTime() {
      return convertTimeHHMMSS(this.currentSeconds);
    },
    durationTime() {
      return convertTimeHHMMSS(this.durationSeconds);
    },
    percentComplete() {
      return (this.currentSeconds / this.durationSeconds * 100.0);
    },
    rangeStyle() {
      return {
        backgroundImage: `linear-gradient(90deg, #eb5286 ${this.percentComplete}%, #f2d024 ${this.percentComplete}%)`
      }
    },
    muted() {
      return this.volume / 100 === 0;
    }
  },
  watch: {
    playing(value) {
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
      this.updateUrlHash();
    },
    volume() {
      this.showVolume = false;
      this.audio.volume = this.volume / 100;
    },
    playbackRate(value) {
      this.audio.playbackRate = value
    }
  },
  created() {
    this.innerLoop = this.loop;
  },
  mounted() {
    this.audio = this.$el.querySelectorAll('audio')[0];
    this.audio.addEventListener('timeupdate', this.update);
    this.audio.addEventListener('loadeddata', this.load);
    this.audio.addEventListener('pause', () => {
      this.playing = false;
    });
    this.audio.addEventListener('play', () => {
      this.playing = true;
    });
    if (window.location.hash.length) {
      this.audio.addEventListener('canplaythrough', () => {
        this.currentSeconds = parseInt(window.location.hash.slice(1));
        this.seek();
      }, {once: true});
    }
  },
  methods: {
    download() {
      this.stop();
      window.open(this.file, 'download');
    },
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        return this.playing = !this.audio.paused;
      }

      throw new Error('Failed to load sound file.');
    },
    mute() {
      if (this.muted) {
        return this.volume = this.previousVolume;
      }
      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek() {
      this.audio.currentTime = this.currentSeconds;
      this.updateUrlHash();
    },
    stop() {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    update() {
      this.currentSeconds = parseInt(this.audio.currentTime);
    },
    updateUrlHash() {
      window.location.hash = '#' + this.currentSeconds.toString();
    },

    playbackRateUp() {
      const rate = this.playbackRate >= this.playbackRateMax
        ? this.playbackRateMax
        : this.playbackRate += 0.1
      this.playbackRate = parseFloat(rate.toFixed(1))
    },

    playbackRateDown() {
      const rate = this.playbackRate <= this.playbackRateMin
        ? this.playbackRateMin
        : this.playbackRate -= 0.1
      this.playbackRate = parseFloat(rate.toFixed(1))
    }
  }
}
</script>
