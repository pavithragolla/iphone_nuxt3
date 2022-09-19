<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link
      v-for="iphone in iphones"
      :key="iphone"
      :to="`iphone/${iphone}`"
      class="shadow-lg border rounded-lg text-center"
    >
      <h1>{{ iphone }}</h1>
      <img width="200" :src="`/images/${iphone}.jpg`" alt="" />
    </nuxt-link>
    <!-- <nuxt-link
      to="iphone/iphone-12-pro"
      class="shadow-lg border rounded-lg text-center"
    >
      <h1>IPhone 12 pro</h1>
      <img width="200" src="/images/iphone12-pro.jpg" alt="" />
    </nuxt-link>
    <nuxt-link
      to="iphone/iphone-13"
      class="shadow-lg border rounded-lg text-center"
    >
      <h1>IPhone 13</h1>
      <img width="200" src="/images/iphone13.jpg" alt="" />
    </nuxt-link>
    <nuxt-link
      to="iphone/iphone-13-pro"
      class="shadow-lg border rounded-lg text-center"
    >
      <h1>IPhone 13 pro</h1>
      <img width="120" src="/images/iphone13-pro.jpg" alt="" />
    </nuxt-link> -->
  </div>
</template>
<script setup>
useHead({
  title: "iphones",
});
const iphones = ["iphone12", "iphone12-pro", "iphone13", "iphone13-pro"];
// const { data } = useFetch("/iphones");
// const iphones = data;
// console.log("Hii");
</script>