<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {};
  },

  components: {
    ProjectCard,
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <div class="container">
    <h2>Progetti</h2>

    <div class="row row-cols-3 g-3">
      <div class="col" v-for="project in projects">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
