<template>
  <section class="related-articles">
    <div class="container">
      <h3 v-if="title" class="related-articles__title">{{ title }}<span>:</span></h3>
      <div class="related-articles__body">
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
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
const runtimeConfig = useRuntimeConfig()
const url = new URL(`${runtimeConfig.public.apiBase}/Articles`)
url.searchParams.append('page', 1)
url.searchParams.append('limit', 3)
url.searchParams.append('orderBy', 'createdAt')
url.searchParams.append('order', 'desc')

const { pending, data: articles } = useFetch(url, {
  lazy: true,
})
</script>

<style scoped>
.related-articles {
  padding: 50px 0 60px;
  background: var(--neutral-alpha);

  @media (--desktop) {
    padding: 120px 0;
  }

  .container {
    @media (--desktop) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 30px;

    @media (--desktop) {
      font-size: 2.125rem;
      font-weight: 400;
      line-height: 1.17;
    }

    span {
      color: var(--brand-alpha);
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
    gap: 40px 30px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;

    @media (--desktop) {
      grid-column: 2 / span 3;
      overflow: visible;
    }

    .card {
      flex: 0 0 364px;
      max-width: 261px;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
}
</style>
