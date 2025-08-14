// server/api/__sitemap__/urls.ts
import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrl } from '#sitemap/types'


export default defineSitemapEventHandler(async () => {
  const res:any = await $fetch('https://organ.zfcloud.cc/prod-api/article')

// 將 camelCase 轉 kebab-case
  const toKebabCase = (str: string) =>
    str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

  // 轉換成 SitemapUrl 格式
  const urls: SitemapUrl[] = res.data.map((a: { groupType: any; articleId: any; updateTime: any }) => ({
    loc: `/${toKebabCase(a.groupType)}/${a.articleId}`, // 對應你的文章路徑
    lastmod: a.updateTime,
  }))

  return urls;
})
