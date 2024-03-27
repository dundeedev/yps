<template>
  <form class="search-bar" @submit.prevent="submitForm">
    <input v-model="searchTerm" class="search-bar__input" placeholder="Enter a search term" />
    <BaseButton button-size="sm">Search</BaseButton>
  </form>
</template>

<script setup>
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
  display: flex;
}
</style>
