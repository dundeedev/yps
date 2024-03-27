<template>
  <div>
    <HeroFeatured
      v-if="articles && articles.latest"
      heading="Latest article"
      :title="articles.latest[0].title"
      :image="articles.latest[0].image"
      :text="articles.latest[0].intro"
      :button-to="`/articles/${articles.latest[0].id}`"
      button-text="Read Article"
    />
    <div class="container">
      <div v-if="error && error.statusCode === 404 && searchTerm" class="message">
        Sorry, there are no articles matching your search terms
        <NuxtLink to="/">Clear Search</NuxtLink>
      </div>
      <h2 v-else-if="searchTerm && articles">Search results for: {{ searchTerm }}</h2>
      <div v-if="articles && articles.list" class="news-list">
        <BaseCard
          v-for="(article, index) in articles.list"
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
const pageLimit = ref(route.query.limit ?? 16)
const searchTerm = computed(() => route.query.search)

const url = computed(() => {
  const url = new URL(`${runtimeConfig.public.apiBase}/Articles`)
  url.searchParams.append('page', currentPage.value)
  url.searchParams.append('limit', pageLimit.value)
  url.searchParams.append('orderBy', 'createdAt')
  url.searchParams.append('order', 'desc')
  url.searchParams.append('search', searchTerm.value ?? null)
  return url
})

const {
  data: articles,
  pending,
  error,
} = await useAsyncData(
  'articles',
  async () => {
    const [list, latest] = await Promise.all([
      $fetch(url.value),
      $fetch(`${runtimeConfig.public.apiBase}/Articles?page=1&limit=1&orderby=createdAt&order=desc`),
    ])
    return { list, latest }
  },
  {
    watch: [url],
    transform: (articles) => {
      const list = replaceImages(articles.list)
      const latest = replaceImages(articles.latest)
      return { list, latest }
    },
  },
)

// Replace PlaceIMG as it no longer exists
function replaceImages(articles) {
  return articles.map((item) => ({
    ...item,
    image: ['http://placeimg.com/640/480'].includes(item.image) ? 'https://picsum.photos/640/480' : item.image,
  }))
}
</script>
