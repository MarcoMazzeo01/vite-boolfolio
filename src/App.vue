<script>
import ProjectsList from "./components/projects/ProjectsList.vue";
import axios from "axios";

export default {
  data() {
    return {};
  },

  components: { ProjectsList },

  created() {},
};
</script>

<template>
  <h1>Progetti API</h1>
  <hr />

  <ProjectsList />
</template>

<style lang="scss"></style>
