

<!-- TODO: ok so I got the likes displayed. Now I just need to be able to add likes on click. This will be a put for the post, and it will increase the length of the like by one on click. -->


<template>
  <div class="row m-1 post-card">
    <div class="col-5">
      <img class="img-fluid img" :src="post.imgUrl" alt="bad-img">
    </div>
    <div class="col-7">
      <div class="row">
        {{ post.body }}
      </div>
      <!-- TODO: reformat this so it's not displaying raw time -->
      <div class="row mt-1">
        {{ dateFormat(post.createdAt) }}, {{ timeFormat(post.createdAt) }}
      </div>
      <!-- TODO: user profile stuff goes here -->
      <div class="row mt-5">
        <div class="col-6">
          <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">

            <img class="creator-img" :src="post.creator.picture" alt="bad-img">
            <h4>{{ post.creator.name }}</h4>

          </router-link>

          <p>{{ post.creator.bio }}</p>

          <h3 v-if="user.isAuthenticated">Likes: <i @click="likePost(post.id)" class="mdi mdi-heart like-button">{{
            post.likes.length }}</i></h3>
          <div class="d-flex justify-content-end delete-button">
            <i v-if="post.creatorId == account.id" @click="deletePost(post.id)" class="mdi mdi-delete">Delete</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from '../AppState.js'
import { Post } from "../models/Post.js";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { postsService } from "../services/PostsService.js";


export default {
  // NOTE: DO NOT FORGET YOUR PROPS, OR IT WILL NOT DISPLAY THINGS PROPERLY
  props: { post: { type: Post, required: true } },


  setup() {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      async deletePost(postId) {
        try {
          await postsService.deletePost(postId)
          Pop.toast('Post deleted!❌')
        } catch (error) {
          Pop.error(error)
        }
      },

      async likePost(postId) {
        try {
          logger.log('liking post with the following id:', postId)
          await postsService.likePost(postId)
        } catch (error) {
          Pop.error(error)
        }
      },

      dateFormat(date) {
        let newDate = new Date(date).toLocaleDateString('en-us', { month: 'long', day: 'numeric' })
        return newDate
      },

      timeFormat(time) {
        let newTime = new Date(time).toLocaleTimeString('en-us', { hour: 'numeric', minute: '2-digit' })
        return newTime
      }

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

.delete-button {
  color: #d52d2dd0;
  cursor: pointer;
  font-size: 2em;
}

.like-button {
  color: #9c1212;
  cursor: pointer;

}
</style>