<template>
  <header class="site-header">
    <NuxtLink to="/" title="Homepage" class="site-header__logo">
      <Logo class="site-header__logo-svg" filled />
    </NuxtLink>
    <div class="site-header__search">
      <SearchBar />
    </div>
  </header>
</template>

<script setup>
import Logo from '~/assets/images/logo.svg'
</script>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: var(--dark-alpha);
  padding: 0 15px;
}

.site-header__logo {
  display: block;

  svg {
    height: 30px;
    width: unset;
  }
}
</style>
