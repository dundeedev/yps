<template>
  <div class="social-share">
    <h3 class="social-share__title">Share:</h3>
    <ul class="social-share__items">
      <li>
        <button type="button" class="social-share__item" @click="share('twitter')">
          <Twitter class="social-share__svg social-share__svg--twitter" filled />
        </button>
      </li>
      <li>
        <button type="button" class="social-share__item" @click="share('linkedin')">
          <Linkedin class="social-share__svg social-share__svg--linkedin" filled />
        </button>
      </li>
      <li>
        <button type="button" class="social-share__item" @click="share('facebook')">
          <Facebook class="social-share__svg social-share__svg--facebook" filled />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Twitter from '~/assets/images/social/x-twitter.svg'
import Linkedin from '~/assets/images/social/linkedin.svg'
import Facebook from '~/assets/images/social/facebook.svg'

const shareUrls = new Map()
shareUrls.set('twitter', 'https://twitter.com/intent/tweet?text=YPS&url=')
shareUrls.set('facebook', 'https://www.facebook.com/sharer/sharer.php?u=')
shareUrls.set('linkedin', 'https://www.linkedin.com/sharing/share-offsite/?url=')

const options = 'toolbar=0,status=0,resizable=1,width=626,height=436'

function share(brand) {
  const url = `${shareUrls.get(brand)}${window.location.href}`
  window.open(url, 'sharer', options)
}
</script>

<style scoped>
.social-share {
  display: flex;
  align-items: center;
  gap: 10px;

  &__title {
    margin: 0;
  }

  &__items {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 20px;

    li {
      display: flex;
    }
  }

  &__item {
    background: none;
    padding: 0;
    border: 0;
    appearance: none;
  }

  &__svg {
    height: 30px;
    width: 30px;

    &--twitter {
      fill: var(--twitter);
    }

    &--facebook {
      fill: var(--facebook);
    }

    &--linkedin {
      fill: var(--linkedin);
    }
  }
}
</style>
