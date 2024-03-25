<template>
  <form class="search-bar" @submit.prevent="submitForm">
    <input class="search-bar__input" v-model="searchTerm" placeholder="Enter a search term" />
    <button>Search</button>
  </form>
</template>

<script setup>
const router = useRouter()
const searchTerm = ref('')

function submitForm() {
  let url = '/'
  if (searchTerm.value) {
    url = `/?search=${encodeURIComponent(searchTerm.value)}`
  }
  searchTerm.value = null
  router.push(url)
}
</script>

<style scoped></style>
