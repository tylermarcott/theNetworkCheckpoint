<template>
  <!-- TODO: on this form we want the user to be able to edit their bio, picture, name, github, linkedin, resume -->

  <div class="row mb-1">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-2">
        <input v-model="accountData.name" type="text" placeholder="name" class="form-control col-6" maxlength="20"
          required=true>
      </div>

    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.picture" type="url" placeholder="picture" class="form-control col-6" required="true">
      </div>

    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.github" type="url" placeholder="GitHub" class="form-control col-6" required="true">
      </div>

    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.linkedin" type="url" placeholder="LinkedIn" class="form-control col-6"
          required="true">
      </div>

    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.resume" type="link" placeholder="resume" class="form-control col-6" required="true">
      </div>

    </form>
  </div>

  <div class="row mb-1">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-2">
        <input v-model="accountData.class" type="text" placeholder="class" class="form-control col-6" maxlength="20"
          required=true>
      </div>

    </form>
  </div>

  <div class="form-check my-1">
    <input v-model="accountData.graduated" class="form-check-input" type="checkbox" value="" id="graduated">
    <label class="form-check-label" for="graduated">
      <h4>Graduated?</h4>
    </label>
  </div>

  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <textarea v-model="accountData.bio" type="text" placeholder="bio" class="form-control col-6" rows="5"></textarea>
      </div>
      <div class="row ms-3">
        <button class="col-2 btn btn-secondary m-1">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";

export default {
  setup() {
    const accountData = ref({})
    return {
      accountData,
      account: computed(() => AppState.account),

      async editAccount() {
        try {
          logger.log('editing account with the following data: ', accountData.value)
          await accountService.editAccount(accountData.value)
          Pop.toast('Change saved ✅')
        } catch (error) {
          Pop.error(error)
        }

      }

    };
  },
};
</script>


<style></style>