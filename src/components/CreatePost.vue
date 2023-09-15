<template>
  <form class="component row" @submit.prevent="createPost">
    <div class="col-4">
      profile pic goes here
    </div>
    <div class="col-8">
      <div class="row">
        <input v-model="postData.body" class="form-control" type="text" placeholder="Post Body">
      </div>
      <div class="row">
        <input v-model="postData.imgUrl" class="form-control" type="text" placeholder="Post Image URL">
      </div>
    </div>
    <button class="btn btn-secondary">Submit Post</button>
  </form>
</template>

<script>

import { ref } from "vue";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";


export default {
  setup() {
    // define ref
    const postData = ref({})
    return {
      // return ref
      postData,
      // NOTE: do not pass in postData because we already have access because of the ref.
      async createPost() {
        try {

          logger.log('here is our data we got from the form:', postData)

          await postsService.createPost(postData.value)
        } catch (error) {
          Pop.error(error)
        }
      }
    };
  },
};
</script>


<style></style>