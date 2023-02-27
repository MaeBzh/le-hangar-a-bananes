<template>
  <FBShareButton size="small" />
  <h2>
    Commentaires (<span :data-cusdis-count-page-id="pageId">0</span>)
    <VPButton class="ml-4" size="small" @click="toogleShowComments">
      {{ btnText }}
    </VPButton>
  </h2>

  <hr />

  <transition name="fade">
    <div
      v-show="showComments"
      id="cusdis_thread"
      data-host="https://cusdis.com"
      :data-app-id="cusdisAppId"
      :data-page-id="pageId"
      :data-page-url="pageUrl"
      :data-page-title="pageTitle"
      :data-theme="isDark ? 'dark' : 'light'"
    ></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FBShareButton from "./FBShareButton.vue";

export default defineComponent({
  name: "Comment",
  components: {
    FBShareButton,
  },
  props: {
    pageId: {
      type: String,
      required: true,
    },
    pageUrl: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showComments: false,
      observer: null,
      isDark: false,
    };
  },
  mounted() {
    this.setDark();
    this.observer = new MutationObserver(this.setDark);
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    this.initCusdis();
  },
  beforeUnmount() {
    this.observer?.disconnect();
  },
  methods: {
    initCusdis() {
      if (!(window as any).CUSDIS) {
        const script = document.createElement("script");
        script.setAttribute("defer", "");
        script.setAttribute("async", "");
        script.setAttribute("src", "https://cusdis.com/js/cusdis.es.js");
        document.head.appendChild(script);

        setTimeout(() => {
          (window as any).CUSDIS?.setTheme(this.isDark ? "dark" : "light");
        }, 1000);
      }
    },
    setDark() {
      this.isDark = document.documentElement.classList.contains("dark");
    },
    toogleShowComments() {
      this.showComments = !this.showComments;
      if (this.showComments) {
        this.$nextTick(() => {
          const el = document.getElementById("cusdis_thread");
          (window as any).CUSDIS?.renderTo(el);
        });
      }
    },
  },
  computed: {
    cusdisAppId() {
      return (window as any).CUSDIS_APP_ID;
    },
    btnText() {
      return this.showComments
        ? "Masquer les commentaires"
        : "Voir les commentaires";
    },
  },
});
</script>
