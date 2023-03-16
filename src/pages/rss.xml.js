import rss, { pagesGlobToRssItems } from '@astrojs/rss'
export async function get() {
  return rss({
    title: 'sazk',
    description: 'My journey learning Astro',
    site: 'https://sazk07-astro1.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`
  })
}
