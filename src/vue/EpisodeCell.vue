<template>
  <div class="my-8 p-8 devmode-container">
    <div class="flex flex-wrap items-center justify-center flex-row-reverse md:flex-row flex-col-reverse">
      <div class=" w-full md:w-2/3 text-left py-2">
        <h2 class="font-mono italic font-bold text-devmode-pink text-3xl">
          <a
            :href="url"
            class="title-link"
          >
            {{ title }}
          </a>
        </h2>
      </div>
      <div class="w-full md:w-1/3 text-devmode-pink font-mono text-xs text-left md:text-right uppercase py-2">
        Episode {{ episodeNumber }} / {{ postDate }}
      </div>
    </div>

    <p class="text-devmode-pink font-sans text-xl py-2 leading-normal">
      {{ summary }}
    </p>
  </div>
</template>
<script>
    export default {
        name: 'EpisodeCell',
        props: {
            title: String,
            url: String,
            postDate: String,
            episodeNumber: Number,
            summary: String,
        },
    }
</script>
