<template>
  <form class="component row m-2" @submit.prevent="createPost">
    <div class="col-4">
      <img class="creator-img" :src="account.picture" :alt="account.name">
      <h4 class="text-light">{{ account.name }}</h4>
    </div>
    <div class="col-7">
      <div class="row input-box mb-1">
        <input v-model="postData.body" class="form-control" type="text" placeholder="Post Body">
      </div>
      <div class="row input-box mb-2">
        <input v-model="postData.imgUrl" class="form-control" type="text" placeholder="Post Image URL">
      </div>
    </div>
    <div class="col-11 d-flex justify-content-end">
      <button class="btn btn-primary">Submit Post</button>
    </div>
  </form>
</template>

<script>

import { ref, computed } from "vue";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";


export default {
  setup() {
    // define ref
    const postData = ref({})
    return {

      account: computed(() => AppState.account),
      // return ref
      postData,
      // NOTE: do not pass in postData because we already have access because of the ref.
      async createPost() {
        try {

          logger.log('here is our data we got from the form:', postData)

          await postsService.createPost(postData.value)

          Pop.toast('Post created!✅')
        } catch (error) {
          Pop.error(error)
        }
      }
    };
  },
};
</script>


<style>
.creator-img {
  max-height: 5vh;
  max-width: 5vh;
  border-radius: 50em;
}

.input-box {
  border: solid black;
}
</style>