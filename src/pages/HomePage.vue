
<template>
  <!-- NOTE: used prebuilt user.isAuthenticated to check if the user is logged in or not!!! -->
  <section v-if="user.isAuthenticated" class="row">
    <CreatePost :posts="posts" />
  </section>

  <section class="row d-flex justify-content-center">
    <div v-for="post in posts" :key="post.id" class="col-10">
      <PostCard :post="post" />

    </div>
  </section>

  <ChangePage />
  <section class="row">
    <div v-for="ad in ads" :key="ad.id">
      <AdCard :ad="ad" />
    </div>
  </section>
</template>

<script>
import Pop from "../utils/Pop.js";
import { postsService } from '../services/PostsService.js'
import { adsService } from "../services/AdsService.js";
import { computed, onMounted } from "vue";
import { AppState } from '../AppState.js'
import { logger } from "../utils/Logger.js";

export default {
  setup() {

    onMounted(() => getPosts());
    onMounted(() => getAds())
    async function getPosts() {
      try {
        await postsService.getPosts();
      } catch (error) {
        Pop.error(error);
      }
    }

    async function getAds() {
      await adsService.getAds()
    }

    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      posts: computed(() => AppState.posts),
      ads: computed(() => AppState.ads),
      setActiveAccount() {
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
