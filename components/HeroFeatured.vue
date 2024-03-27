<template>
  <div class="hero-featured">
    <div class="container">
      <div v-if="heading" class="hero-featured__header">
        <h2 class="hero-featured__heading">{{ heading }}</h2>
      </div>
      <div class="hero-featured__body">
        <div v-if="image" class="hero-featured__image">
          <NuxtImg :src="image" :alt="title ?? 'Image'" />
        </div>
        <div class="hero-featured__content">
          <h3 v-if="title" class="hero-featured__title">{{ title }}</h3>
          <div v-if="text" class="hero-featured__text">
            <p>{{ text }}</p>
          </div>
          <BaseButton v-if="buttonTo && buttonText" :to="buttonTo">{{ buttonText }}</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  buttonTo: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.hero-featured {
  --text-colour: #fff;
  padding: 50px 0 60px;
  background-image: linear-gradient(-29deg, #101921, #003e52);
  color: var(--text-colour);

  @media (--tablet) {
    padding: 60px 0 100px;
  }

  &__header {
    margin: 0 0 30px;

    @media (--tablet) {
      margin: 0 0 40px;
    }
  }

  &__heading {
    font-size: 1.5rem;
    color: var(--text-colour);

    @media (--tablet) {
      font-size: 1.75rem;
    }
  }

  &__image {
    img {
      width: 100%;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media (--tablet) {
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  &__title {
    color: var(--text-colour);
    font-size: 1.125rem;
    margin: 0 0 20px;

    @media (--tablet) {
      font-size: 1.5rem;
    }
  }

  &__text {
    margin: 0 0 30px;
    color: #cdd9e1;
    font-size: 0.875rem;

    @media (--tablet) {
      font-size: 1rem;
    }
  }
}
</style>
