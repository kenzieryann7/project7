<template>
  <div class="card mb-3">
    <div class="card-header">
      <input v-model="message" class="input-group" type="input" />
    </div>
    <div class="card-body">
      <button @click="onClick" class="btn btn-lg btn-primary">Add Point</button>
    </div>
    <div class="card-footer">
      {{ computedInput }}
    </div>
  </div>

  <pre class="alert-secondary text-start">{{ sampleData }}</pre>
  <pre class="alert-info text-start">{{ sampleData[0].key1 }}</pre>
  <pre class="alert-warning text-start">{{ filteredDataToValue1 }}</pre>
  <pre class="alert-danger text-start">{{ filteredData(0) }}</pre>
  <pre class="alert-success text-start">{{ filteredData(1) }}</pre>
</template>

<script>
import sampleData from "@/data/sample.json";

export default {
  name: "_ComponentTemplate",
  data: function() {
    return {
      points: 0,
      message: "",
      sampleData: sampleData,
      allCourses: sampleData
    };
  },
  props: {
    pointLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    computedInput() {
      return `You have ${this.points} ${this.pointLabel}. ${this.message}`;
    },
    filteredDataToValue1() {
      return this.sampleData.filter(e => e.key1 == "value1");
    }
  },
  methods: {
    onClick() {
      this.points += 1;
    },
    filteredData(id) {
      return this.sampleData.filter(e => e.id == id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Avoid using CSS if a Bootstrap class exists -->
<style scoped></style>
