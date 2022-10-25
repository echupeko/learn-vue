<template>
  <div>
    <div class="nav">
      <router-link to="/">Home</router-link>|<router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div>
      <HomePage/>
      <AboutPage/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import AboutPage from "./views/AboutPage/AboutPage.vue";

export default defineComponent({
  name: "App",
  components: { AboutPage, HomePage },
});
</script>

<style lang="scss">
</style>
