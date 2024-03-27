<template>
  <form class="search-bar" @submit.prevent="submitForm">
    <SearchIcon class="search-bar__icon" />
    <input v-model="searchTerm" class="search-bar__input" placeholder="Enter a search term" />
    <BaseButton button-size="sm" class="search-bar__button">Search</BaseButton>
  </form>
</template>

<script setup>
import SearchIcon from '~/assets/images/icons/magnifying-glass-solid.svg'

const router = useRouter()
const searchTerm = ref('')

function submitForm() {
  const url = searchTerm.value ? `/?search=${encodeURIComponent(searchTerm.value)}` : '/'
  searchTerm.value = null
  router.push(url)
}
</script>

<style scoped>
.search-bar {
  position: relative;
  display: flex;
  align-items: center;

  &__input {
    border: 1px solid var(--neutral-echo);
    background: none;
    padding: 10px 100px 10px 40px;
    border-radius: 5px;

    &::placeholder {
      color: var(--text-light-colour);
    }
  }

  &__icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--neutral-foxtrot);
  }

  &__button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
