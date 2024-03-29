<template>
  <div class="card">
    <div class="card__figure">
      <NuxtImg v-if="image" :src="image" data-test="image" :alt="title ?? 'Card Image'" />
    </div>
    <div class="card__body">
      <h3 v-if="title" class="card__title" data-test="title">
        {{ title }}
      </h3>
      <div v-if="intro" class="card__excerpt" data-test="excerpt">
        {{ intro }}
      </div>
    </div>
    <div class="card__footer" data-test="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  intro: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  transition: box-shadow 0.2s, transform 0.2s;

  &__figure {
    margin-bottom: 30px;
  }

  &__body {
    padding: 10px;
  }

  &__title {
    margin-bottom: 25px;
  }

  &__excerpt {
    color: var(--neutral-bravo);
    font-size: 0.875rem;
    line-height: 1.57;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__footer {
    padding: 0 10px;
    padding-top: 10px;
    margin-top: auto;
  }

  @media (--desktop) {
    &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
      box-shadow: 4px 8px 40px rgba(173, 191, 202, 0.8);
    }
  }
}
</style>
