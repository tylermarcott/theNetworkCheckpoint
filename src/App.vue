<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-primary text-dark">
    Made by numerous Cats with Hats
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

header {
  overflow-x: hidden;
  width: 100%
}

main {
  overflow-x: hidden;
  width: 100%
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
  overflow-x: hidden;
  width: 100%
}
</style>
