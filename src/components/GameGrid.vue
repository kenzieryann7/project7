<template>
  <div>

    <div class="row ">
      <div class="col-4 bordered" v-for="box in boxes" :key="box.id">
      </div>
    </div>

  </div>
</template>

<script>
import { GridData } from "@/data/GridData.js"

export default {
  name: 'GameGrid',
  components: {},
  data: () => {
    return {
      boxes: GridData.label,
      id: GridData.id
    }
  },
  methods: {
    setActive(id) {
      return console.log(id);
    },
    isActive(id) {
      return id == this.activeID;
    }
  },
  computed: {

  }
};
</script>

<style scoped>
    .bordered {
        height: 150px;
        border: 2px solid black;
    }
</style>