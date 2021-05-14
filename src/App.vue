<!-- In most cases, this file shouldn't be changed. -->

<template>
  <TheHeader class="mb-5" />
  <Main />
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Main from "@/views/Main";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    Main,
    TheFooter
  }
};
</script>
