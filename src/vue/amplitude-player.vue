<template>
    <div id="single-song-player">
        <div class="bottom-container flex items-center">
            <div class="control-container flex-shrink">
                <div class="amplitude-play-pause" amplitude-main-play-pause="true" id="play-pause">
                    <div class="text-devmode-pink text-4xl cursor-pointer">
                        <i class="icon-play" v-show="paused"></i>
                        <i class="icon-pause" v-show="!paused"></i>
                    </div>
                </div>
            </div>

            <div class="hidden sm:block time-container flex-shrink pr-3 pl-1">
                            <span class="current-time text-devmode-pink font-mono text-xs text-left">
                                <span class="amplitude-current-hours" amplitude-main-current-hours="true"></span>:<span class="amplitude-current-minutes" amplitude-main-current-minutes="true"></span>:<span class="amplitude-current-seconds" amplitude-main-current-seconds="true"></span>
                            </span>
            </div>

            <div class="flex-grow px-1 pt-0">
                <progress class="amplitude-song-played-progress w-full h-3 rounded"
                          amplitude-main-song-played-progress="true"
                          id="song-played-progress"
                          @click="seek"
                          :value="progress">
                </progress>
            </div>

            <div class="time-container flex-shrink pl-3 pr-1">
                            <span class="duration text-devmode-pink font-mono text-xs text-left">
                                <span class="amplitude-duration-hours" amplitude-main-duration-hours="true"></span>:<span class="amplitude-duration-minutes" amplitude-main-duration-minutes="true"></span>:<span class="amplitude-duration-seconds" amplitude-main-duration-seconds="true"></span>
                            </span>
            </div>

        </div>
    </div>
</template>

<script>
    import Amplitude from 'amplitudejs';
    // Our component exports
    export default {
        components: {},
        props: {
            title: String,
            artist: String,
            url: String,
            autoPlay: Boolean,
        },
        data: function() {
            return {
                progress: 0,
                paused: true,
            }
        },
        computed: {},
        methods: {
            isPaused: function() {
                const audio = Amplitude.audio();
                return audio.paused;
            },
            // Handle the player seek
            seek: function(e) {
                const offset = e.target.getBoundingClientRect(),
                    x = e.pageX - offset.left,
                    percentage = (parseFloat(x) / parseFloat(e.target.offsetWidth)) * 100;
                Amplitude.setSongPlayedPercentage(percentage);
            }
        },
        mounted: function() {
            const self = this;
            Amplitude.init({
                "preload": "auto",
                "songs": [
                    {
                        "name": this.title,
                        "artist": this.artist,
                        "url": this.url
                    },
                ],
                "bindings": {
                    37: 'prev',
                    39: 'next',
                    32: 'play_pause'
                },
                "autoplay": this.autoPlay,
                "callbacks": {
                    'after_play': function() {
                        const audio = Amplitude.audio();
                        self.paused = audio.paused;
                        // const hitObj = {
                        //     hitType: 'event',
                        //     eventCategory: 'podcast',
                        //     eventAction: 'play',
                        //     eventLabel: self.title,
                        // };
                        // window.ga('send', hitObj);
                    },
                    'after_pause': function() {
                        const audio = Amplitude.audio();
                        self.paused = audio.paused;
                    }
                }
            });
        },
    }
</script>
