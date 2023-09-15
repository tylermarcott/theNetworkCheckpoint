

<!-- TODO: so next, I want to be able to click on a profile name or image on a post, and be taken to the corresponding profile PAGE. On this page, I want to have a bio section with info on the user, and display all of their posts below that. To display all of the user's posts, I will have to make a function getPostByCreator I think? This will entail finding all that posts that include the specific creatorId from the profile page that we are on. -->

<!-- NOTE: make sure to add your page to your router. -->


<template>
  hello from the profile page!
</template>


<script>
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { profileService } from '../services/ProfileService.js'
import { onMounted } from "vue";
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
    };
  },
};
</script>


<style></style>