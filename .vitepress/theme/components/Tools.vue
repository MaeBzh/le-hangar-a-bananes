<template>
  <ToolsItem v-for="(tool, index) in tools" :tool="tool" :key="index" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Tool } from "../types";
import ToolsItem from "./ToolsItem.vue";
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";

export default defineComponent({
  name: "Products",
  components: { ToolsItem, VPButton },
  props: {
    tools: {
      type: Array as () => Tool[],
      required: true,
    },
  },
});
</script>
