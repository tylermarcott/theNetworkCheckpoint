
<!-- NOTE: make sure to add your page to your router. -->


<template>
  <section v-if="profile" class="container mt-2">
    <div class="row profile-card elevation-1">
      <div class="col-6">
        <img class="profile-pic" :src="profile.picture" alt="bad-img">
        <div class="row">
          <div class="col-12">Resume: {{ profile.resume }}</div>
        </div>
        <div class="row">
          <div class="col-4">LinkedIn: {{ profile.linkedin }}</div>
        </div>
        <div class="row">
          <div class="col-4">GitHub: {{ profile.gitHub }}</div>
        </div>
      </div>

      <div class="col-6">
        <div class="row">
          <h3>{{ profile.name }}</h3>
        </div>
        <div class="row">
          <p>Bio: {{ profile.bio }}</p>
        </div>
      </div>
    </div>


    <section class="row">
      <div v-for="post in posts" :key="post.id" class="col-12">
        <!-- NOTE: this syntax works for making sure posts don't show up in profile that aren't made by the account -->
        <!-- FIXME: when posts run out for user, option to go to older page still works but nothing gets displayed. Fix this.-->
        <div v-if="post.creatorId == profile.id">
          <PostCard :post="post" />
        </div>
      </div>
    </section>

    <!-- FIXME: pagination works, but then it starts populating other people's pages once the profile posts are done. Fix this, need to make sure other posts don't get into this page. Make sure that if the post doesn't match the id of the profile, then it won't be shown -->


    <ChangePage />
  </section>
</template>


<script>
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { profileService } from '../services/ProfileService.js'
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js";
// import { logger } from "../utils/Logger.js";


export default {
  setup() {
    onMounted(() => getProfileById());
    onMounted(() => getPostsById());

    const route = useRoute();

    async function getProfileById() {
      try {
        await profileService.getProfileById(route.params.profileId)
      } catch (error) {
        Pop.error(error)
      }
    }


    async function getPostsById() {
      try {
        await profileService.getPostsById(route.params.profileId)
      } catch (error) {
        Pop.error(error)
      }
    }


    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts)
    };
  },
};
</script>


<style>
.profile-pic {
  max-height: 40vh;
}

.profile-card {
  background-color: rgb(212, 212, 236);
  min-height: 22vh;
  margin-bottom: 1em;
}
</style>