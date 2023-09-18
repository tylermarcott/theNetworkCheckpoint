<template>
  <section>
    <div class="col-6">
      <img :src="ad.banner" alt="bad.img">
    </div>
  </section>
</template>

<script>
import { logger } from "../utils/Logger.js";
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Ad } from "../models/Ad.js";

export default {
  props: { ad: { type: Ad, required: true } },
  setup() {
    return {
    };
  },
};
</script>


<style></style>