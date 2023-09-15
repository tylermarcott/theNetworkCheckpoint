<template>
  <div class="row m-1 post-card">
    <div class="col-5">
      <img class="img-fluid img" :src="post.img" alt="bad-img">
    </div>
    <div class="col-7">
      <div class="row">
        {{ post.body }}
      </div>
      <!-- TODO: reformat this so it's not displaying raw time -->
      <div class="row mt-1">
        Created on: {{ post.createdAt }}
      </div>
      <!-- TODO: user profile stuff goes here -->
      <div class="row mt-5">
        <div class="col-6">

          <!-- TODO: remove this, just for testing -->
          here's the creator id: {{ post.creatorId }}


          <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">

            <img class="creator-img" :src="post.creator.picture" alt="bad-img">
            <h4>{{ post.creator.name }}</h4>

          </router-link>

          <p>{{ post.creator.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from '../AppState.js'
import { Post } from "../models/Post.js";


export default {
  // NOTE: DO NOT FORGET YOUR PROPS, OR IT WILL NOT DISPLAY THINGS PROPERLY
  props: { post: { type: Post, required: true } },


  setup() {
    return {
      posts: computed(() => AppState.posts)
    };
  },
};
</script>


<style>
.img {
  max-height: 30vh;
  max-width: 30vh;
}

.post-card {
  border: solid #181515 2px;
  border-radius: 5px;
  min-height: 30vh;
  background-color: #ddedf7;
}

.creator-img {
  max-height: 5vh;
  max-width: 5vh;
  border-radius: 50em;
}
</style>