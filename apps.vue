<template>
  <a href="#" @click="view('home')">Home</a>
  <a href="#" @click="view('counter')">Counter</a>
  <!-- <component :is="MyComponent" /> -->
  <NuxtPage />
  <LazyHomeWelcome v-if="page == 'home'" />
  <br />
  <LazyCounter v-if="page == 'counter'" />
  <br />
</template>


<script setup>
const page = ref("home");

function view(name) {
  page.value = name;
}
</script>

