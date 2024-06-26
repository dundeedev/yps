<template>
  <div>
    <article v-if="article" class="article">
      <header v-if="article.title" class="article__header">
        <h2 class="article__title">{{ article.title }}</h2>
      </header>
      <div class="article__intro">
        <div class="article__meta">
          <time v-if="article.createdAt" class="article__date" :datetime="article.createdAt">
            {{ formatDate(article.createdAt) }} </time
          >|
          <span class="article__author">
            {{ article.author }}
          </span>
        </div>
        <div v-if="article.intro" class="article__intro-text">
          <p>{{ article.intro }}</p>
        </div>
        <div v-if="article.image" class="article__image">
          <NuxtImg src="https://picsum.photos/900/600" />
        </div>
      </div>
      <div v-if="article.text" class="article__body">
        <p v-html="article.text" />
      </div>
      <BaseSocialShare class="article__share" />
    </article>
    <RelatedArticles title="Latest news articles" />

    <Title v-if="article.title">{{ `${article.title} | Your Parking Space` }}</Title>
    <Meta v-if="article.intro" name="description" :content="article.intro" />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const { id } = useRoute().params

const { data: article, error } = await useFetch(`${runtimeConfig.public.apiBase}/Articles/${id}`)
</script>

<style scoped>
.article {
  max-width: 750px;
  margin: 0 auto;
  padding: 35px 0;

  @media (--tablet) {
    padding: 120px 0;
  }

  &__header {
    display: flex;
    justify-content: center;
    margin: 0 0 70px;
    padding: 0 15px;
  }

  &__title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }

  &__intro {
    background: var(--neutral-alpha);
    border-top: 2px solid var(--brand-alpha);
    padding: 36px 25px 45px;
    margin: 0 0 40px;

    @media (--tablet) {
      padding: 50px 76px 76px;
    }
  }

  &__meta {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 0 0 30px;
    color: var(--text-muted-colour);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
  }

  &__date {
    display: block;
  }

  &__intro-text {
    margin: 0 0 30px;
    font-weight: 700;

    @media (--tablet) {
      margin: 0 0 60px;
      text-align: center;
    }
  }

  &__image {
    width: 100%;
    margin: 0 0 40px;

    img {
      width: 100%;
    }

    @media (--tablet) {
      position: relative;
      width: calc(100% + 346px);
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__body {
    padding: 0 15px;
    margin: 0 0 50px;

    p {
      font-size: 0.875rem;

      @media (--tablet) {
        font-size: 1rem;
        line-height: 2;
      }
    }
  }

  &__share {
    padding: 0 15px;
  }
}
</style>
