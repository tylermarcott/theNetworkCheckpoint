<template>
  <!-- TODO: create form here with single input, it will search for post with the word typed in in the post body -->

  <form class="component" @submit.prevent="searchForPostByKeyword">
    <div class="col-4">
      <input class="p-1 rounded" v-model="postData.body" type="text" required="true" placeholder="search for post">
    </div>
  </form>
</template>

<script>
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { ref } from "vue";

export default {
  setup() {

    const postData = ref({})

    return {
      postData,
      async searchForPostByKeyword() {
        try {
          await postsService.searchForPostByKeyword(postData.value)
        } catch (error) {
          Pop.error(error)
        }
      }

    };
  },
};
</script>


<style></style>