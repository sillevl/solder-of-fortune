<template>
  <div class="iframe-container">
    <iframe
      :src="youtubeUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  props: ["videoId", "startAt"],
  computed: {
    youtubeUrl: function () {
      const startAt = this.startAt ? `?t=${this.startAt}` : ''
      return `https://www.youtube.com/embed/${this.videoId}${startAt}`;
    },
  },
};
</script>

<style>
.iframe-container {
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  position: relative;
  margin: 16px auto;
}

.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
</style>