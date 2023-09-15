<template>
  hello from the post card
</template>

<script>
import Pop from "../utils/Pop.js";
import { postsService } from '../services/PostsService.js'
import { onMounted } from "vue";

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
    };
  },
};
</script>


<style></style>