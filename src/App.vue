<script>
import ProjectsList from "./components/projects/ProjectsList.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      api: {
        baseURL: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: { ProjectsList },

  methods: {
    fetchProjects(uri = this.api.baseURL + "projects") {
      axios.get(uri).then((response) => {
        console.log(response.data);
        this.projects = response.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h1>Progetti API</h1>
  <hr />

  <ProjectsList :projects="projects" />
</template>

<style lang="scss"></style>
