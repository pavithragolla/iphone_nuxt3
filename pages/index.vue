<template>
  <div class="div">
    Welcome To iphone Store
    <button @click="moveToAbout">To About</button>
  </div>
</template>
<script setup>
function moveToAbout() {
  navigateTo("about");
}
</script>
<style>
button {
  color: yellow;
  background: red;
  margin: 1rem;
}
</style>
