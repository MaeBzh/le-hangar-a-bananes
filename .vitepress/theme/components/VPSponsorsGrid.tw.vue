<script setup lang="ts">
import { computed, ref } from "vue";
import { useSponsorsGrid } from "../composables/sponsor-grid.js";

export type GridSize = "xmini" | "mini" | "small" | "medium" | "big";
export interface Sponsor {
  name: string;
  img: string;
  url: string;
}

const props = defineProps<{
  size?: GridSize;
  data: Sponsor[];
}>();

const size = computed(() => props.size ?? "medium");
const el = ref(null);

useSponsorsGrid({ el, size: props.size });
</script>

<template>
  <div class="VPSponsorsGrid group flex flex-wrap gap-[4px]" ref="el">
    <div
      v-for="sponsor in data"
      :key="sponsor.name"
      :class="[
        'group-data-[vp-grid=2]:w-[calc((100% - 4px) / 2)]',
        'group-data-[vp-grid=3]:w-[calc((100% - 4px * 2) / 3)]',
        'group-data-[vp-grid=4]:w-[calc((100% - 4px * 3) / 4)]',
        'group-data-[vp-grid=5]:w-[calc((100% - 4px * 4) / 5)]',
        'group-data-[vp-grid=6]:w-[calc((100% - 4px * 5) / 6)]',
      ]"
    >
      <a
        :class="{
          'h-[64px]': size === 'xmini',
          'h-[72px]': size === 'mini',
          'h-[96px]': size === 'small',
          'h-[112px]': size === 'medium',
          'h-[186px]': size === 'big',
        }"
        :href="sponsor.url"
        target="_blank"
        rel="sponsored noopener"
      >
        <article class="flex justify-center align-center w-[100%]">
          <h4 class="visually-hidden">{{ sponsor.name }}</h4>
          <img
            :class="{
              'max-w-[64px] max-h-[22px]': size === 'xmini',
              'max-w-[96px] max-h-[24px]': size === 'mini' || size === 'small',
              'max-w-[120px] max-h-[36px]': size === 'medium',
              'max-w-[192px] max-h-[56px]': size === 'big',
            }"
            :src="sponsor.img"
            :alt="sponsor.name"
          />
        </article>
      </a>
    </div>
  </div>
</template>
