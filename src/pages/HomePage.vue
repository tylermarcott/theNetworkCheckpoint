



<!-- TODO: next I want to create a component for searching for a post by searching for a certain word that's in the post body. Create a search and link it on the navbar, link to component SearchPost -->




<template>
  <section class="row">
    <CreatePost :posts="posts" />
  </section>

  <section class="row">
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :post="post" />
    </div>
  </section>

  <ChangePage />
</template>

<script>
import Pop from "../utils/Pop.js";
import { postsService } from '../services/PostsService.js'
import { computed, onMounted } from "vue";
import { AppState } from '../AppState.js'
import { logger } from "../utils/Logger.js";

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
      posts: computed(() => AppState.posts),
    }
  }
}
</script>

<style scoped lang="scss"></style>
