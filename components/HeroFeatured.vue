<template>
  <div class="hero-featured">
    <div class="container">
      <div class="hero-featured__header">
        <h2 class="hero-featured__heading">Latest article</h2>
      </div>
      <div class="hero-featured__body">
        <div class="hero-featured__image">
          <NuxtImg src="https://picsum.photos/502/287" />
        </div>
        <div class="hero-featured__content">
          <h3 class="hero-featured__title">Some blog title</h3>
          <div class="hero-featured__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius commodo ligula, quis venenatis
              tortor ultricies id. Sed eu velit interdum, molestie mi id, vehicula dolor. Duis scelerisque ex quis
              libero congue, eget tempus nisl laoreet. Aenean at diam vel.
            </p>
          </div>
          <BaseButton to="/articles/1">Read Article</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
