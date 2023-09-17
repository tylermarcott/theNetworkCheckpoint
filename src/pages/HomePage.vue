

<!-- TODO: ok I have to figure out how to make the likes work. Is it a put...? I'm not sure how that would work when trying to do a put on someone else's stuff. Need to look into this. -->


<template>
  <!-- FIXME: this is getting rid of the create post regardless of whether I am logged in or not. -->
  <section v-if="account" class="row">
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
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      setActiveAccount() {

      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
