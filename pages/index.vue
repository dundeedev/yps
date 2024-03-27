<template>
  <div>
    <HeroFeatured />
    <div class="container">
      <div v-if="error && error.statusCode === 404 && searchTerm" class="message">
        Sorry, there are no articles matching your search terms
        <NuxtLink to="/">Clear Search</NuxtLink>
      </div>
      <h2 v-else-if="searchTerm && articles">Search results for: {{ searchTerm }}</h2>
      <div v-if="articles" class="news-list">
        <BaseCard
          v-for="(article, index) in articles"
          :key="`news-item-${index}`"
          :title="article.title"
          :image="article.image"
          :intro="article.intro"
          @click="navigateTo(`/articles/${article.id}`)"
        >
          <template #footer>
            <BaseButton :to="`/articles/${article.id}`" :text-link="true">Read Article</BaseButton>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const currentPage = ref(route.query.page ?? 1)
const pageLimit = ref(route.query.limit ?? 15)
const searchTerm = computed(() => route.query.search)

const url = computed(() => {
  const url = new URL(`${runtimeConfig.public.apiBase}/Articles`)
  url.searchParams.append('page', currentPage.value)
  url.searchParams.append('limit', pageLimit.value)
  url.searchParams.append('search', searchTerm.value ?? null)
  return url
})

const { data: articles, error } = await useFetch(url, {
  transform: (articles) => {
    // Replace PlaceIMG as it no longer exists
    return articles.map((item) => ({
      ...item,
      image: 'https://picsum.photos/640/480',
    }))
  },
})
</script>
