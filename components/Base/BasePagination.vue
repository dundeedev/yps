<template>
  <div class="pagination">
    <div class="pagination__prev">
      <BaseButton :to="prevLink" :button-style="currentPage > 1 ? 'primary' : 'light'" :text-light="currentPage > 1">
        Previous
      </BaseButton>
    </div>
    <div class="pagination__pages">
      <ul>
        <li v-for="n in totalPages">
          <BaseButton :to="pageTo(n)" :button-style="n === currentPage ? 'secondary' : 'light'">{{ n }}</BaseButton>
        </li>
      </ul>
    </div>
    <div class="pagination__next">
      <BaseButton
        :to="nextLink"
        :button-style="currentPage < totalPages ? 'primary' : 'light'"
        :text-light="currentPage < totalPages"
      >
        Next
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  count: {
    type: Number,
    default: 1,
  },
  perPage: {
    type: Number,
    default: 1,
  },
  hash: {
    type: String,
    default: '',
  },
})

const route = useRoute()
const currentUrl = route.path

const totalPages = computed(() => {
  const pages = props.count / props.perPage
  return Math.ceil(pages)
})

const prevLink = computed(() => {
  return props.currentPage > 1 ? `${currentUrl}?page=${props.currentPage - 1}` : `${currentUrl}${props.hash}`
})

const nextLink = computed(() => {
  return props.currentPage < totalPages.value
    ? `${currentUrl}?page=${props.currentPage + 1}${props.hash}`
    : `${currentUrl}?page=${props.currentPage}${props.hash}`
})

function pageTo(n) {
  return `${currentUrl}?page=${n}${props.hash}`
}
</script>

<style scoped>
.pagination {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  padding: 40px 0 100px;
  gap: 20px;

  @media (--tablet) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__pages {
    grid-column: 1 / span 3;
    grid-row: 1;
    justify-self: center;

    ul {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      padding: 0;
    }

    :deep .button {
      width: 36px;
      height: 36px;
      padding: 0;
      align-items: center;
      justify-content: center;
    }
  }

  &__next {
    grid-column: 3;
  }
}
</style>
