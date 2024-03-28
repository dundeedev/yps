<template>
  <header class="site-header">
    <NuxtLink to="/" title="Homepage" class="site-header__logo">
      <Logo class="site-header__logo-svg" filled />
    </NuxtLink>
    <div class="site-header__search">
      <SearchBar :open="searchOpen" />
    </div>
    <div class="site-header__buttons">
      <button type="button" class="site-header__button" @click="toggleSearch">
        <SearchIcon class="site-header__button-icon" />
      </button>
    </div>
  </header>
</template>

<script setup>
import Logo from '~/assets/images/logo.svg'
import SearchIcon from '~/assets/images/icons/magnifying-glass-solid.svg'
const searchOpen = ref(false)

function toggleSearch() {
  searchOpen.value = !searchOpen.value
}
</script>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: var(--dark-alpha);
  padding: 0 15px;

  &__logo {
    display: block;

    svg {
      height: 30px;
      width: unset;
    }
  }

  &__buttons {
    display: flex;

    @media (--tablet) {
      display: none;
    }
  }

  &__button {
    border: 0;
    background: none;
    color: var(--brand-alpha);
  }

  &__button-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
