
<!-- TODO: ok so first thing I want to do is make it so someone that is not logged in can see ALL posts on the home page -->
<!-- how will I do this? Start by creating a PostCard component to add to the homepage. -->



<template>
  <section class="row">
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :post="post" />
    </div>
  </section>
</template>

<script>
import Pop from "../utils/Pop.js";
import { postsService } from '../services/PostsService.js'
import { computed, onMounted } from "vue";
import { AppState } from '../AppState.js'
// import { logger } from "../utils/Logger.js";

export default {
  setup() {

    onMounted(() => getPosts());
    async function getPosts() {
      try {
        await postsService.getPosts();
      } catch (error) {
        Pop.error(error);
      }
    }

    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss"></style>
