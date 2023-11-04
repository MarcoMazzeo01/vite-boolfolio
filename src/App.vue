<script>
import ProjectsList from "./components/projects/ProjectsList.vue";
import axios from "axios";

export default {
  data() {
    return {};
  },

  components: { ProjectsList },

  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<template>
  <h1>Progetti API</h1>
  <hr />

  <ProjectsList />
</template>

<style lang="scss"></style>
