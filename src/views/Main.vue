<template>
  <div class="container">
    <!--
      Introduction
      -->
    <div v-show="!isReady">
      <Instructions
        body="You will be shown three different maps. Select the region on the map."
      />
      <button class="btn btn-primary btn-lg fw-bold" @click="beginActivity">
        Begin
      </button>
    </div>

    <div v-show="isReady && !isComplete">
      <!-- Instructions component is commonly used, but can be removed -->
      <Instructions body="Lorum." />

      <div class="row">
        <div class="col">
          <!-- SVG -->
          SVG

          <WorldSVG v-show="isWorldMap" @on-click="checkAnswer($event)" />
          <!--
          <MiddleEastSVG
            v-show="isMiddleEastMap"
            @on-click="checkAnswer($event)"
          />
          -->
          <!-- <IsraelSVG v-show="isIsraelMap" @on-click="checkAnswer($event)" /> -->
        </div>
        <div class="col">
          <!-- Display the question. -->
          <div class="h3">
            Please locate<br />
            <span class="fw-bold">{{ currentQuestion.label }}</span
            >.
          </div>
        </div>
      </div>
    </div>

    <div v-show="isComplete">
      <div class="alert alert-info text-dark">You've finished!</div>
    </div>
  </div>
</template>

<script>
import Instructions from "@/components/Instructions";

import quiz from "@/data/quiz.json";

import WorldSVG from "@/components/WorldSVG";
import MiddleEastSVG from "@/components/MiddleEastSVG";
import IsraelSVG from "@/components/IsraelSVG";

export default {
  name: "Main",
  components: {
    Instructions,
    WorldSVG,
    MiddleEastSVG,
    IsraelSVG
  },
  data: function() {
    return {
      isReady: false,
      isComplete: false,
      quizData: quiz,
      quizIndex: 0,
      totalWrong: 0
    };
  },
  props: {},
  computed: {
    currentQuestion() {
      return this.quizData[this.quizIndex];
    },
    isWorldMap() {
      return this.currentQuestion.map == "world";
    },
    isMiddleEastMap() {
      return this.currentQuestion.map == "middleeast";
    },
    isIsraelMap() {
      return this.currentQuestion.map == "israel";
    }
  },
  methods: {
    beginActivity() {
      this.isReady = true;
    },
    checkAnswer(id) {
      console.log("Check Answer", id);

      if (this.currentQuestion.id == id) {
        // correct

        if (this.quizIndex >= this.quizData.length - 1) {
          this.isComplete = true;
        } else {
          this.quizIndex += 1;
        }
      } else {
        //incorrect
        this.totalWrong += 1;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Avoid using CSS if a Bootstrap class exists -->
<style scoped></style>
