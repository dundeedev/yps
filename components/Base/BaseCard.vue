<template>
  <div class="card">
    <div class="card__figure">
      <NuxtImg
        v-if="image"
        :src="image"
      />
    </div>
    <div class="card__body">
      <h3 class="card__title">{{ title }}</h3>
      <div class="card__excerpt">{{ intro }}</div>
    </div>
    <div class="card__action">
      <NuxtLink :to="`/articles/${id}`">Read More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: null,
    required: true,
  },
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

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
    box-shadow: 4px 8px 40px rgba(173, 191, 202, 0.8);
  }
}

.card__figure {
  margin-bottom: 35px;
}

.card__body {
  padding: 10px;
}

.card__title {
  margin-bottom: 30px;
}

.card__excerpt {
  color: var(--text-muted-colour);
  font-size: 0.875rem;
  line-height: 1.57;
}

.card__action {
  padding: 0 10px;
  margin-top: auto;
}
</style>
