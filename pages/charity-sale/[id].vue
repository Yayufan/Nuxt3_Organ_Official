<!--  -->
<template>

    <section class="article-section">

        <Breadcrumbs2 firstRoute="義賣活動" :secoundRoute="article.title"></Breadcrumbs2>

        <div class="title-box">
            <div class="title">{{ article.title }}</div>
            <div class="announcementDate">{{ article.announcementDate }}</div>
        </div>

        <div class="article-content ck-content" v-html="htmlContent">

        </div>

        <div class="aricle-attachment-box">
            <a class="download-link file-link" target="_blank" :href="`${domain}/minio${item.path}`"
                v-for="(item, index) in articleAttachmentList" :key="item.articleAttachmentId">
                {{ item.name }}
            </a>
        </div>

    </section>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import 'ckeditor5/ckeditor5.css';
import Breadcrumbs2 from '@/components/layout/Breadcrumbs2.vue'

//SEO
useSeoMeta({
    title: '義賣活動文章',
    titleTemplate: '%s | 社團法人中華民國器官捐贈協會',
    description: '參與協會義賣活動，以實際行動支持器官捐贈推廣與公益計畫。',
    ogTitle: '義賣活動｜支持器官捐贈的公益行動',
    ogDescription: '透過義賣參與公益，協助推廣器官捐贈與生命延續的理念。',
    keywords: '器官捐贈義賣, 公益義賣, 器捐活動'
})

const route = useRoute();

//預設假資料
const article = reactive({
    type: '一般公告',
    title: '靜態展示-113年中秋休診公告',
    announcementDate: '2024-10-08'
})
const htmlContent = ref('')

const getArticle = async () => {
    let { data: response } = await SSRrequest.get(`article/show/${route.params.id}`)

    // 直接更新 articleList 的值
    if (response.value?.data) {
        Object.assign(article, response.value.data)
        htmlContent.value = response.value.data.content
    }

}

await getArticle()

/**---------------------------------------------------- */

//獲取當前domain
const domain = useRuntimeConfig().public.domain

const articleAttachmentList = reactive<Record<string, any>[]>([])

const getArticleAttachment = async () => {
    let { data: response } = await SSRrequest.get(`article-attachment/${route.params.id}`)

    // 直接更新 articleAttachmentList
    if (response.value?.data) {
        //先清空,在抓取
        articleAttachmentList.length = 0
        Object.assign(articleAttachmentList, response.value.data)

    } else {
        articleAttachmentList.length = 0
    }
}

await getArticleAttachment()


</script>

<style scoped lang="scss">
.article-section {
    margin: 0 auto;
    margin-bottom: 3%;
    font-family: initial;

    .title-box {
        margin: 3% 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1%;
        border-bottom: 1px #686A69 solid;
        font-size: 1.4rem;
        color: $main-color;

        .title {
            letter-spacing: 0.2rem;
            font-weight: 600;
        }

        .announcementDate {
            min-width: 70px;
        }

    }

    .article-content {
        margin: 0 8%;
    }

    .aricle-attachment-box {
        margin: 0 8%;
        display: flex;
        flex-direction: column;
        margin-top: 3%;

        .file-link{
            margin: 10px 0;
        }

    }

}
</style>
