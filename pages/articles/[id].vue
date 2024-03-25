<template>
  <div>{{ article }}</div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const { id } = useRoute().params

const { data: article, error } = await useFetch(
  `${runtimeConfig.public.apiBase}/Articles/${id}`,
)
</script>

<style scoped></style>
