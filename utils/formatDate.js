export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-gb', { year: 'numeric', month: 'long', day: 'numeric' })
}
