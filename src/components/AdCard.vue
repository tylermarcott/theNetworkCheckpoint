<template>
  ads go here
</template>

<script>
import { adsService } from "../services/AdsService.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    return {
      async getAds() {
        logger.log('getting some ads')
        await adsService.getAds()
      }
    };
  },
};
</script>


<style></style>