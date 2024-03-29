import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import BaseCard from '../components/Base/BaseCard.vue'

describe('base card component', () => {
  test('title shows when prop is set', async () => {
    const wrapper = mount(BaseCard, {
      props: {
        title: 'Example Title',
      },
    })

    // Get title text and check it equals prop
    const title = wrapper.get('[data-test="title"]')
    expect(title.text()).toBe('Example Title')

    // Title does not show when prop is not set
    await wrapper.setProps({ title: '' })
    expect(wrapper.find('[data-test="title"]').exists()).toBe(false)
  })

  test('excerpt shows when prop is set', async () => {
    const wrapper = mount(BaseCard, {
      props: {
        intro: 'Here is some example text that you would expect to find in an excerpt',
      },
    })

    const excerpt = wrapper.get('[data-test="excerpt"]')
    expect(excerpt.text()).toBe('Here is some example text that you would expect to find in an excerpt')

    // Excerpt does not show when prop is not set
    await wrapper.setProps({ intro: '' })
    expect(wrapper.find('[data-test="excerpt"]').exists()).toBe(false)
  })

  test('image shows when prop is set', async () => {
    const wrapper = mount(BaseCard, {
      props: {
        image: 'https://picsum.photos/900/600',
      },
    })

    const image = wrapper.get('[data-test="image"]')
    expect(image.element.tagName).toBe('IMG')
    expect(image.attributes('src')).toBe('https://picsum.photos/900/600')

    // Image does not show when prop is not set
    await wrapper.setProps({ image: '' })
    expect(wrapper.find('[data-test="image"]').exists()).toBe(false)
  })

  test('card footer slot', () => {
    const wrapper = mount(BaseCard, {
      slots: {
        footer: 'Read More',
      },
    })

    const footer = wrapper.get('[data-test="footer"]')
    expect(footer.text()).toContain('Read More')
  })
})
