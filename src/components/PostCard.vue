<template>
  {{ posts }}
</template>

<script>
import Pop from "../utils/Pop.js";
import { postsService } from '../services/PostsService.js'
import { computed, onMounted } from "vue";
import { AppState } from '../AppState.js'

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
    };
  },
};
</script>


<style></style>