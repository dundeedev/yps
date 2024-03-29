<template>
  <div>
    <SiteHeader />
  </div>
  <NuxtPage />
</template>

<script setup>
useHead({
  title: 'Your Parking Space | Frontend Developer Technical Test',
  meta: [{ name: 'description', content: 'Technical assessment for the YourParkingSpace Frontend Engineer Role.' }],
})
</script>

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
