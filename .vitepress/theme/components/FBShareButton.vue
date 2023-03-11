<template>
  <VPButton
    v-if="facebookShareUrl"
    :href="facebookShareUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="facebook-share-button"
  >
    Partager sur Facebook
  </VPButton>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "FBShareButton",
  props: {
    size: {
      type: String,
      default: "small",
    },
  },
  setup() {
    const facebookShareUrl = ref("");

    onMounted(() => {
      let url = "https://www.facebook.com/dialog/share";
      url += "?app_id=" + (window as any).FACEBOOK_APP_ID;
      url += "&display=popup";
      url += "&href=" + window.location.href;
      url += "&redirect_uri=" + window.location.href;

      facebookShareUrl.value = url;
    });

    return {
      facebookShareUrl,
    };
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
