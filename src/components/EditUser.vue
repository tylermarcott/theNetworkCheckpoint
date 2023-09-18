<template>
  <!-- TODO: on this form we want the user to be able to edit their bio, picture, name, github, linkedin, resume -->

  <div class="row mb-1">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-2">
        <input v-model="accountData.name" type="text" placeholder="name" class="form-control col-6">
      </div>
      <div class="row ms-3">
        <button class="col-2 btn btn-secondary mb-2">Submit</button>
      </div>
    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.picture" type="text" placeholder="picture" class="form-control col-6">
      </div>
      <div class="row ms-3">
        <button class="col-2 btn btn-secondary m-1">Submit</button>
      </div>
    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.github" type="text" placeholder="GitHub" class="form-control col-6">
      </div>
      <div class="row ms-3">
        <button class="col-2 btn btn-secondary m-1">Submit</button>
      </div>
    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.linkedin" type="text" placeholder="LinkedIn" class="form-control col-6">
      </div>
      <div class="row ms-3">
        <button class="col-2 btn btn-secondary m-1">Submit</button>
      </div>
    </form>
  </div>


  <div class="row mb-2">
    <form class="col-12" @submit.prevent="editAccount">
      <div class="row mb-1">
        <input v-model="accountData.resume" type="text" placeholder="resume" class="form-control col-6">
      </div>
      <div class="row ms-3">
        <button class="col-2 btn btn-secondary m-1">Submit</button>
      </div>
    </form>
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

  <form action="">

  </form>
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