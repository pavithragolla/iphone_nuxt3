<template>
  <div>
    <nav
      class="
        bg-purple-900
        shadow-lg
        p-3
        text-white text-lg
        flex
        justify-between
      "
    >
      <div class="flex">
        <NuxtLink class="mr-4" to="/">Home</NuxtLink>
        <NuxtLink class="mr-4" to="/iphone">iphones </NuxtLink>
        <p class="mr-4">Cart({{ cart.length }})</p>
        <p>Total page visited : {{ pageVisitCount }}</p>
      </div>
      <div v-if="auth.isAuthenticated">
        <NuxtLink to="/profile">Profile </NuxtLink>
        <button class="ml-4" @click="logout">Logout</button>
      </div>
      <NuxtLink v-else to="/login">Login</NuxtLink>
      <!-- <P>{{ auth.isAuthenticated }}</P> -->
    </nav>
  </div>
</template>

<script setup>
const cart = useCart();
const auth = useAuth();
const pageVisitCount = usePageVisitCount();

console.log(cart.value.length);
function logout() {
  auth.value.isAuthenticated = false;
}
</script>