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
    default: 78,
  },
  perPage: {
    type: Number,
    default: 16,
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 100px;

  &__pages {
    ul {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      padding: 0;
    }
  }
}
</style>
