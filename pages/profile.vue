<template>
  <div>
    <p>Welcome to profile</p>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
definePageMeta({
  layout: "sidebar",
  middleware: ["auth"],
});
</script>