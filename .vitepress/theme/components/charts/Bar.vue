<template>
  <Card :title="title">
    <ChartBar :options="options" :data="data" />
  </Card>
</template>

<script lang="ts">
import { Bar as ChartBar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import Card from "../Card.vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "Bar",
  components: { ChartBar, Card },
  props: {
    title: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({ responsive: true }),
    },
  },
  computed: {
    data() {
      return {
        labels: this.labels,
        datasets: this.datasets,
      };
    },
  },
};
</script>
