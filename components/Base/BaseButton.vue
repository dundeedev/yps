<template>
  <component :is="component" :to="to" class="button" :class="buttonClasses">
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  buttonStyle: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary', 'light', 'dark'].includes(value)
    },
  },
  buttonSize: {
    type: String,
    default: 'm',
    validator(value) {
      return ['sm', 'm', 'lg'].includes(value)
    },
  },
  textLink: {
    type: Boolean,
    default: false,
  },
})

const component = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLink')
  } else {
    return 'button'
  }
})
const buttonClasses = computed(() => {
  return [
    `button--${props.buttonStyle}`,
    `button--${props.buttonSize}`,
    {
      'button--text-link': props.textLink,
    },
  ]
})
</script>

<style scoped>
.button {
  --primary-bg: var(--brand-alpha);
  --secondary-bg: var(--brand-bravo);
  --dark-bg: #000;
  --light-bg: #fff;

  --primary-colour: var(--text-dark-colour);
  --secondary-colour: var(--text-light-colour);
  --dark-colour: var(--text-light-colour);
  --light-colour: var(--text-dark-colour);
  --text-link-colour: var(--brand-alpha);

  --sm-padding: 6px 20px;
  --m-padding: 8px 24px;
  --lg-padding: 10px 24px;

  --sm-font-size: 0.875rem;
  --m-font-size: 1rem;
  --lg-font-size: 1.25rem;

  display: flex;
  border: 0;
  padding: 0;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &--primary {
    background: var(--primary-bg);
    color: var(--primary-colour);
  }

  &--sm {
    padding: var(--sm-padding);
    font-size: var(--sm-font-size);
  }

  &--m {
    padding: var(--m-padding);
    font-size: var(--m-font-size);
  }

  &--lg {
    padding: var(--lg-padding);
    font-size: var(--lg-font-size);
  }

  &--text-link {
    position: relative;
    display: inline-flex;
    background: none;
    color: var(--text-link-colour);
    padding: 0;

    &:before {
      content: '';
      background: currentColor;
      bottom: 0;
      height: 1px;
      left: 0;
      position: absolute;
      right: 0;
      transition: 0.3s ease;
    }

    &:after {
      content: '→';
      padding-left: 3px;
      transition: 0.3s ease;
    }

    &:hover:after {
      padding-left: 10px;
    }
  }
}
</style>
