<template>
  <nav class="navbar navbar-expand-lg bg-primary px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h3 class="page-title">The Network</h3>
      </div>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
        </li>
      </ul>

      <div class="d-flex mx-5 fs-2">
        <SearchForPost />
      </div>

      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.page-title {
  font-size: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: rgb(11, 8, 8);
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 220px;
    /* overflow-y: hidden;
    height: 100% */
  }
}
</style>
