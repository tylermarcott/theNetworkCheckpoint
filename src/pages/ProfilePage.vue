
<!-- NOTE: make sure to add your page to your router. -->


<template>
  <section v-if="profile" class="container mt-2">
    <div class="d-flex justify-content-center">
      <img class="cover-img" :src="profile.coverImg" alt="bad-img">
    </div>
    <div class="row profile-card elevation-1">
      <div class="col-6 p-1 ms-1">
        <img class="profile-pic rounded" :src="profile.picture" alt="bad-img">
        <div class="row">
          <div class="col-12">Resume: {{ profile.resume }}</div>
        </div>
        <div class="row">
          <div class="col-4">LinkedIn: {{ profile.linkedin }}</div>
        </div>
        <div class="row">
          <div class="col-4">GitHub: {{ profile.gitHub }}</div>
        </div>
        <div v-if="profile.graduated">
          Codeworks Alumni
        </div>
        <div v-else>
          Codeworks Student
        </div>
      </div>

      <div class="col-5">
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
        <div v-if="post.creatorId == profile.id">
          <PostCard :post="post" />
        </div>
      </div>
    </section>

    <!-- FIXME: pagination works, but then it starts populating other people's pages once the profile posts are done. Fix this, need to make sure other posts don't get into this page. Make sure that if the post doesn't match the id of the profile, then it won't be shown -->


    <ChangePage />

    <section class="row">
      <div v-for="ad in ads" :key="ad.id">
        <AdCard :ad="ad" />
      </div>
    </section>


  </section>
</template>


<script>
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { profileService } from '../services/ProfileService.js'
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js";
import { adsService } from "../services/AdsService.js";
// import { logger } from "../utils/Logger.js";


export default {
  setup() {
    onMounted(() => getProfileById());
    onMounted(() => getPostsById());
    onMounted(() => getAds());

    const route = useRoute();


    async function getAds() {
      await adsService.getAds()
    }

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
      posts: computed(() => AppState.posts),
      ads: computed(() => AppState.ads)
    };
  },
};
</script>


<style>
.profile-pic {
  max-height: 40vh;
}

.profile-card {
  background-color: #f7f7f7;
  min-height: 22vh;
  margin-bottom: 1em;
  border-radius: 14px;
}

.cover-img {
  max-height: 70vh;
  max-width: 120vh;
  margin: 1em;
  border-radius: 14px;
}
</style>