export async function useArticles(requestPage = 1, requestLimit = 15) {
  const runtimeConfig = useRuntimeConfig()
  const page = ref(requestPage)
  const limit = ref(requestLimit)

  const endpoint = computed(() => {
    const endpoint = new URL(`${runtimeConfig.public.apiBase}/Articles`)
    endpoint.searchParams.append('page', page.value)
    endpoint.searchParams.append('limt', limit.value)
    return endpoint
  })

  const { data: articles, error } = await useFetch(endpoint.value)

  return {
    articles,
    error,
    page,
    limit,
  }
}