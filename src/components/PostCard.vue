

<template>
  <div class="row m-1 post-card ps-5 pe-5">
    <div class="col-4">
      <img class="img-fluid img" :src="post.imgUrl" alt="bad-img">
    </div>
    <div class="col-8">
      <div class="row">

        {{ post.body }}

      </div>
      <div class="row mt-1">
        {{ dateFormat(post.createdAt) }}, {{ timeFormat(post.createdAt) }}
      </div>
      <div class="row mt-5">
        <div class="col-9">
          <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">

            <img class="creator-img" :src="post.creator.picture" alt="bad-img">
            <h4>{{ post.creator.name }}</h4>

          </router-link>

          <!-- NOTE: used this syntax to crop the bio length to 100 characters, so long bios don't stretch post cards -->
          <!-- ok wtf so it works but throws an error that makes it so my create update doesn't work... -->
          <!-- <div>{{ post.creator.bio.substring(0, 100) + '...' }}</div> -->
          <div>{{ post.creator.bio }}</div>

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
  max-height: 40vh;
  max-width: 40vh;
}

.post-card {
  border: solid #181515 2px;
  border-radius: 5px;
  min-height: 50vh;
  background-color: #F8F0E3;
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