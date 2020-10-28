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
          class="amplitude-play-pause"
          :title="playing == true ? 'Pause' : 'Play'"
          :aria-label="playing == true ? 'Pause' : 'Play'"
          href="#"
          aria-controls="audiofile"
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
          type="range"
          min="0"
          :max="durationSeconds"
          class="amplitude-song-played-progress w-full h-3 rounded"
          :style="rangeStyle"
          tabIndex="0"
          title="Audio seek bar"
          aria-valuetext="Audio seek bar"
          :aria-valuemax="durationSeconds"
          aria-valuemin="0"
          :aria-valuenow="Math.round(currentSeconds)"
          aria-controls="audiofile"
          role="slider"
          @input="seek"
        >
        <div class="block sm:hidden text-center time-container pr-3 pl-1">
          <span class="current-time text-devmode-pink font-mono text-xs text-left">
            {{ currentTime }} / {{ durationTime }}
          </span>
        </div>
      </div>

      <div class=" time-container flex-shrink pl-3 pr-1 pb-5 sm:pb-0">
        <div class="playback font-mono flex justify-center leading-none">
          <button
            id="decrease-playback"
            class="bg-devmode-pink text-sm text-white hover:text-black focus:text-black text-center w-6"
            :disabled="playbackRate <= playbackRateMin"
            :class="{ 'opacity-50 cursor-not-allowed' : playbackRate <= playbackRateMin }"
            :aria-disabled="playbackRate <= playbackRateMin"
            aria-label="Decrease playback rate"
            @click.prevent="playbackRateDown"
          >
            -
          </button>

          <span class="bg-devmode-yellow text-devmode-pink text-xs text-center p-1 w-24">{{ playbackRate }}x speed</span>

          <button
            id="increase-playback"
            class="bg-devmode-pink text-sm text-white hover:text-black focus:text-black text-center w-6"
            :disabled="playbackRate >= playbackRateMax"
            :class="{ 'opacity-50 cursor-not-allowed' : playbackRate >= playbackRateMax }"
            :aria-disabled="playbackRate >= playbackRateMax"
            aria-label="Increase playback rate"
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
      :loop="innerLoop"
      :src="url"
      preload="auto"
      style="display: none;"
      :autoplay="autoPlay"
    />
  </div>
</template>

<script>
    const convertTimeHHMMSS = (val) => {
        let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

        return  hhmmss;
    };

    // Our component exports
    export default {
        components: {},
        props: {
            title: String,
            artist: String,
            url: String,
            autoPlay: Boolean,
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
                if (value) { return this.audio.play(); }
                this.audio.pause();
                this.updateUrlHash();
            },
            volume(value) {
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
            this.audio.addEventListener('pause', () => { this.playing = false; });
            this.audio.addEventListener('play', () => { this.playing = true; });
            if (window.location.hash.length) {
                this.audio.addEventListener('canplaythrough', (e) => {
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
            update(e) {
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
