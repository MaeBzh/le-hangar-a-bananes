<template>
    <ProductItem
      v-for="(product, index) in products"
      :product="product"
      :key="index"
    />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "../types";
import ProductItem from "./ProductItem.vue";
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";

export default defineComponent({
  name: "Products",
  components: { ProductItem, VPButton },
  props: {
    products: {
      type: Array as () => Product[],
      required: true,
    },
  },
});
</script>
