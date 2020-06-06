<template>
    <div id="single-song-player">
        <div class="bottom-container flex items-center">
            <div class="control-container flex-shrink">
                <a class="amplitude-play-pause" v-on:click.prevent="playing = !playing" title="Play/Pause" href="#" id="play-pause">
                    <div class="text-devmode-pink text-4xl cursor-pointer">
                        <i class="icon-play" v-show="!playing"></i>
                        <i class="icon-pause" v-show="playing"></i>
                    </div>
                </a>
            </div>

            <div class="block time-container flex-shrink pr-3 pl-1">
                <span class="current-time text-devmode-pink font-mono text-xs text-left">
                    {{ currentTime }}
                </span>
            </div>

            <div class="flex-grow px-1 pt-0">
                <input
                        type="range"
                        min="0"
                        :max="durationSeconds"
                        v-model="currentSeconds"
                        @input="seek"
                        class="amplitude-song-played-progress w-full h-3 rounded"
                        id="song-played-progress"
                        :style="rangeStyle"
                />
            </div>

            <div class="time-container flex-shrink pl-3 pr-1">
                <span class="duration text-devmode-pink font-mono text-xs text-left">
                    {{ durationTime }}
                </span>
            </div>

        </div>
        <audio :loop="innerLoop" ref="audiofile" :src="url" preload="auto" style="display: none;" :autoplay="autoPlay"></audio>
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
            },
            volume(value) {
                this.showVolume = false;
                this.audio.volume = this.volume / 100;
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
            seek(e) {
                this.audio.currentTime = this.currentSeconds;
            },
            stop() {
                this.playing = false;
                this.audio.currentTime = 0;
            },
            update(e) {
                this.currentSeconds = parseInt(this.audio.currentTime);
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
        }
    }
</script>
