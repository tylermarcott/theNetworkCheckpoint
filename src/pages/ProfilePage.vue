

<!-- TODO: so next, I want to be able to click on a profile name or image on a post, and be taken to the corresponding profile PAGE. On this page, I want to have a bio section with info on the user, and display all of their posts below that. To display all of the user's posts, I will have to make a function getPostByCreator I think? This will entail finding all that posts that include the specific creatorId from the profile page that we are on. -->

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
          <p>{{ profile.bio }}</p>
        </div>
      </div>
    </div>
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

    const route = useRoute();

    async function getProfileById() {
      try {
        await profileService.getProfileById(route.params.profileId)
      } catch (error) {
        Pop.error(error)
      }
    }


    return {
      profile: computed(() => AppState.activeProfile)
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
  min-height: 60vh;
}
</style>