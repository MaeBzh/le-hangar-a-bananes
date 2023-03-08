

<template>
  <VPButton
    :href="facebookShareUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="facebook-share-button"
  >
    Partager sur Facebook
  </VPButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FBShareButton',
  props: {
    size: {
      type: String,
      default: 'small',
    }
  },
  computed: {
    currentUrl() {
      return `https://le-hangar-a-bananes.fr` + window.location.pathname;
    },
    facebookShareUrl() {
        let url = 'https://www.facebook.com/dialog/share';
        url += '?app_id=' + (window as any).FACEBOOK_APP_ID;
        url += '&display=popup';
        url += '&href=' + this.currentUrl;
        url += '&redirect_uri=' + this.currentUrl;

        return url;
    },
  },
});
</script>

<style scoped>
.facebook-share-button {
  background-color: #3b5998;
  color: #fff;
}

.facebook-share-button:hover {
  background-color: #2d4373;
  color: #fff;
}
</style>