<template>
  <span
    :style="{ height, width: computedWidth }"
    class="skeleton-box"
  />
</template>

<script>
export default {
  name: `SkeletonBox`,
  props: {
    maxWidth: {
      default: 100,
      type: Number,
    },
    minWidth: {
      default: 80,
      type: Number,
    },
    height: {
      default: `109px`,
      type: String,
    },
    width: {
      default: `100%`,
      type: String,
    },
  },
  computed: {
    computedWidth() {
      return this.width || `${Math.floor((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)}%`;
    },
  },
};
</script>

<style>
  .skeleton-box {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    background-color: #dddbdd;
  }

  .skeleton-box::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg, rgb(255 255 255 / 0%) 0, rgb(255 255 255 / 20%) 20%, rgb(255 255 255 / 50%) 60%, rgb(255 255 255 / 0%));
    animation: shimmer 5s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
</style>
