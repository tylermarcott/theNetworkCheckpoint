<template>
  <section class="d-flex justify-content-around mb-1">
    <button @click="changePage(previousUrl), autoScroll()" :disabled="!previousUrl || (posts.length < 20)"
      class="btn btn-primary elevation-2">
      Newer
    </button>
    <!-- NOTE: created syntax to disable next button if there are less than 20 posts on the page. -->
    <button @click="changePage(nextUrl), autoScroll()" :disabled="posts.length < 20"
      class="btn btn-secondary elevation-2">
      Older
    </button>
  </section>
</template>

<script>

import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      posts: computed(() => AppState.posts),
      nextUrl: computed(() => AppState.nextUrl),
      previousUrl: computed(() => AppState.previousUrl),
      async changePage(url) {
        try {
          await postsService.changePage(url)
        } catch (error) {
          Pop.error(error)
        }
      },
      autoScroll() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    };
  },
};
</script>


<style></style>