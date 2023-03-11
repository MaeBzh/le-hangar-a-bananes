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
import { defineComponent, onMounted, ref } from "vue";
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
  setup() {
    const cusdisAppId = ref("");

    const refreshCusdis = () => {
      const el = document.getElementById("cusdis_thread");
      (window as any).CUSDIS?.renderTo(el);
    };

    onMounted(() => {
      cusdisAppId.value = (window as any).CUSDIS_APP_ID;

      if (!(window as any).CUSDIS) {
        const script = document.createElement("script");
        script.setAttribute("defer", "");
        script.setAttribute("async", "");
        script.setAttribute("src", "https://cusdis.com/js/cusdis.es.js");
        document.head.appendChild(script);

        setTimeout(() => {
          const isDark = document.documentElement.classList.contains("dark");

          (window as any).CUSDIS?.setTheme(isDark ? "dark" : "light");
        }, 1000);
      }
    });

    return {
      cusdisAppId,
      refreshCusdis,
    };
  },
  mounted() {
    this.setDark();
    this.observer = new MutationObserver(this.setDark);
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  },
  beforeUnmount() {
    this.observer?.disconnect();
  },
  methods: {
    setDark() {
      this.isDark = document.documentElement.classList.contains("dark");
    },
    toogleShowComments() {
      this.showComments = !this.showComments;
      if (this.showComments) {
        this.$nextTick(this.refreshCusdis);
      }
    },
  },
  computed: {
    btnText() {
      return this.showComments
        ? "Masquer les commentaires"
        : "Voir les commentaires";
    },
  },
});
</script>
