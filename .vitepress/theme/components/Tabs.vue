<template>
  <ul class="mb-8 flex items-center gap-2 ">
    <li
      class="flex flex-1 cursor-pointer align-center justify-center"
      :class="{
        'text-[var(--vp-c-blue-soft)]': index + 1 === activeTab,
        'border-b-2 border-gray-900': index + 1 === activeTab,
        'border-b-2 border-transparent': index + 1 !== activeTab,
      }"
      v-for="(tab, index) in tabs"
      :key="index"
      @click="activeTab = index + 1"
    >
        {{ tab }}
    </li>
  </ul>

  <template v-for="(tab, index) in tabs">
    <div :key="index" v-if="index + 1 === activeTab">
      <slot :name="`tab-${index + 1}`" />
    </div>
  </template>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>

<style scoped>
.vp-doc ul {
  list-style: none;
}

.vp-doc ul,
.vp-doc ol {
  padding-left: 0;
  margin: 0 0 1.5rem 0;
}
</style>
