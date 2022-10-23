<template>
  <div>
    <div class="nav">
      <router-link to="/">Home</router-link>|<router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div>
      <HomePage/>
      <AboutPage :title="'About'"/>
    </div>
  </div>
</template>

<script>
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";

export default {
  name: "App",
  components: { AboutPage, HomePage },
};
</script>

<style lang="scss">
</style>
