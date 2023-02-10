<template>
  <div class="rounded-xl bg-white border border-black p-4">
    <div
      class="fb-like"
      :data-href="href"
      data-layout="button"
      data-size="large"
      data-colorscheme="dark"
      data-share="true"
    ></div>
    <hr />
    <div
      class="fb-comments"
      :data-href="href"
      data-width="100%"
      :data-numposts="numposts"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FBLike",
  props: {
    href: {
      type: String,
      required: true,
    },
    numposts: {
      type: Number,
      default: 10,
    },
  },
});
</script>
