<template>
  <main class="user-layout bg-gray-100">
    <article class="sidebar">
      <slot></slot>
      <p>Dashboard</p>
      <p>Settings</p>
    </article>
  </main>
</template>
<style>
.sidebar {
  display: flex;
  flex-direction: column;
}
.user-layout {
  display: flex;
}
</style>