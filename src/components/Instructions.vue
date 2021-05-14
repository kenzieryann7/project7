<template>
  <div class="alert alert-primary text-dark mb-3">
    <p class="fw-bold mb-0">{{ title }}</p>
    <p class="mb-0">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "Instructions",
  props: {
    title: {
      type: String,
      default: "Instructions"
    },
    body: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
