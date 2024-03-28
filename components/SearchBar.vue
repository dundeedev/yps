<template>
  <form class="search-bar" :class="{ 'search-bar--open': open }" @submit.prevent="submitForm">
    <SearchIcon class="search-bar__icon" />
    <input v-model="searchTerm" class="search-bar__input" placeholder="Enter a search term" />
    <BaseButton button-size="sm" class="search-bar__button">Search</BaseButton>
  </form>
</template>

<script setup>
import SearchIcon from '~/assets/images/icons/magnifying-glass-solid.svg'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

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

  @media (--mobile) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    display: none;
  }

  &--open {
    @media (--mobile) {
      display: flex;
    }
  }

  &__input {
    border: 1px solid var(--neutral-bravo);
    background: none;
    padding: 10px 100px 10px 40px;
    border-radius: 5px;
    color: var(--text-light-colour);

    &::placeholder {
      color: var(--text-light-colour);
    }

    @media (--mobile) {
      --text-light-colour: var(--text-dark-colour);
      width: 100%;
      border: 0;
      border-radius: 0;
      background: var(--neutral-charlie);
    }
  }

  &__icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--neutral-bravo);
  }

  &__button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
