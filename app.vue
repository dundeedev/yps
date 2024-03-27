<template>
  <div>
    <SiteHeader />
  </div>
  <NuxtPage />
</template>

<script setup></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.125rem);
  transform: translateY(10px);
}
</style>
