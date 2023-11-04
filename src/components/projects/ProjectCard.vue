<script>
export default {
  props: { project: Object },
};
</script>

<template>
  <div class="card h-100" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.slug }}</h6>
      <p class="card-text">{{ project.description }}</p>
      <!-- <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
