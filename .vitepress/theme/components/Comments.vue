<template>
  <FBShareButton size="small" />
  <h2>
    Commentaires (<span :data-cusdis-count-page-id="pageId">0</span>)
    <VPButton class="ml-4" size="small" @click="toogleShowComments">
      {{ btnText }}
    </VPButton>
  </h2>

  <hr />

  <transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    enter-active-class="transition duration-400"
    leave-active-class="transition duration-400"
  >
    <div
      v-show="showComments"
      id="cusdis_thread"
      data-host="https://cusdis.com"
      :data-app-id="cusdisAppId"
      :data-page-id="pageId"
      :data-page-url="pageUrl"
      :data-page-title="pageTitle"
      :data-theme="isDark === false ? 'light' : 'dark'"
    ></div>
  </transition>
</template>

<script lang="ts">
import { useData } from "vitepress";
import { defineComponent, onMounted, ref, watchEffect } from "vue";
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
    };
  },
  setup() {
    const isDark = useData().isDark;
    const cusdisAppId = ref("");

    const refreshCusdis = () => {
      const el = document.getElementById("cusdis_thread");
      (window as any).CUSDIS?.renderTo(el);
    };

    const setCusdisTheme = (theme: "light" | "dark" | "auto") => {
      (window as any).CUSDIS?.setTheme(theme);
    };

    onMounted(() => {
      cusdisAppId.value = (window as any).CUSDIS_APP_ID;

      if (!(window as any).CUSDIS) {
        const script = document.createElement("script");
        script.setAttribute("defer", "");
        script.setAttribute("async", "");
        script.setAttribute("src", "https://cusdis.com/js/cusdis.es.js");
        document.head.appendChild(script);
      }
    });

    return {
      isDark,
      cusdisAppId,
      refreshCusdis,
      setCusdisTheme,
    };
  },
  watch: {
    "isDark.value"(val) {
      const theme = val === false ? "light" : "dark";
      this.setCusdisTheme(theme);
    },
  },
  methods: {
    toogleShowComments() {
      this.showComments = !this.showComments;
      if (this.showComments) {
        this.$nextTick(this.refreshCusdis.bind(this));
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
