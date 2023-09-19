<template>
  <div class="text-center text-light">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <h3>Edit user info:</h3>

    <div class="row justify-content-center">
      <div class="col-8">
        <EditUser />
      </div>
    </div>
  </div>

  <section class="row">
    <div v-for="ad in ads" :key="ad.id">
      <AdCard :ad="ad" />
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { adsService } from "../services/AdsService.js";
export default {
  setup() {

    onMounted(() => getAds())
    async function getAds() {
      await adsService.getAds()
    }

    return {
      account: computed(() => AppState.account),
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
