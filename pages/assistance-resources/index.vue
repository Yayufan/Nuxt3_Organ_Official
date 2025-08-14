<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="家屬關懷" secoundRoute="協助資源"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">協助資源</h1>

            <div class="content-box">

                <transition-group name="pagination">

                    <article class="article-item" v-for="(item, index) in articleList.records " :key="item.articleId">

                        <nuxt-link class="article-item-link"
                            :to="{ name: 'assistance-resources-id', params: { id: item.articleId } }">

                            <div class="article-img-box">
                                <ClientOnly>
                                    <img class="article-img" :src="item.coverThumbnailUrl">
                                </ClientOnly>
                            </div>

                            <div class="article-info-box">
                                <h2 class="article-title">{{ item.title }}</h2>
                            </div>
                        </nuxt-link>

                    </article>

                </transition-group>


                <!-- 
        分頁插件 total為總資料數(這邊設置20筆),  default-page-size代表每頁顯示資料(預設為10筆,這邊設置為5筆) 
        current-page當前頁數,官方建議使用v-model與current-page去與自己設定的變量做綁定,
        -->
                <div class="common-pagination">
                    <el-pagination layout="prev, pager, next" :page-count="Number(articleList.pages)"
                        :default-page-size="Number(articleList.size)" v-model:current-page="currentPage"
                        :hide-on-single-page="true" :pager-count="5" />
                </div>

            </div>

        </section>

    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

//SEO
useSeoMeta({
    title: '協助資源',
    titleTemplate: '%s | 社團法人中華民國器官捐贈協會',
    description: '提供器官捐贈相關協助資源，包括心理輔導、法律諮詢與醫療資訊。',
    ogTitle: '協助資源｜器官捐贈支持服務',
    ogDescription: '找到器官捐贈過程所需的各項協助與支持管道。',
    keywords: '器官捐贈協助, 心理輔導, 器捐資源'
})

//設定分頁組件,currentPage當前頁數
//根據裝置預設顯示數量
// const defaultSize = ref(useState('currentSize', () => useIsMobile().value ? 8 : 8))
const defaultSize = ref(useIsMobile().value ? 8 : 8)

//拿到更新路由分頁參數 以及 獲取當前分頁參數的function
const updatePaginationParams = useUpdatePaginationParams()
//傳續判斷裝置後的預設值,這個就是分頁的size
const { page, size } = useGetPaginationParams(defaultSize.value)

//設定分頁組件,currentPage當前頁數
let currentPage = ref(page)
let currentSize = ref(size)

const GROUP = "assistanceResources"

let articleList = reactive({
    pages: 1,
    size: 4,
    records: [
        {
            articleId: '',
            title: '',
            description: '',
            coverThumbnailUrl: '',
            type: ''
        }
    ]
})


//獲取分頁文章的資料
const getArticleList = async (page: number, size: number) => {

    let { data: response, pending } = await SSRrequest.get(`article/${GROUP}/pagination`, {
        params: {
            page,
            size
        }
    })

    // 直接更新 articleList 的值
    if (response.value?.data) {
        Object.assign(articleList, response.value.data)

        // 為每篇文章添加隨機縮圖路徑
        articleList.records.forEach(record => {

            switch (record.type) {
                case "飛行的鳥":
                    record.coverThumbnailUrl = "/img/resource-img-01.png";
                    break;
                case "擁抱":
                    record.coverThumbnailUrl = "/img/resource-img-02.png";
                    break;
                case "燭光":
                    record.coverThumbnailUrl = "/img/resource-img-03.png";
                    break;
                default:
                    record.coverThumbnailUrl = "/img/resource-img-01.png";
                    break;
            }
        });

    }

}

//立即執行獲取資料
await getArticleList(currentPage.value, currentSize.value)

//監聽當前頁數的變化,如果有更動就call API 獲取數組數據
watch(currentPage, (value, oldValue) => {

    getArticleList(value, currentSize.value)

    // 使用window.scrollTo()方法触发滚动效果，每當分頁數據改變,回到最上方
    setTimeout(() => window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    }), 200)

})


</script>

<style scoped lang="scss">
.common-section {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    .common-title {
        color: $main-color;
        font-weight: $common-title-font-weight;
        font-size: $common-title-font-size;
        letter-spacing: $common-title-letter-spacing;
        margin-left: 10%;
        margin-bottom: 3%;

        &::before {
            display: inline;
            content: "";
            border-left: 3px solid $main-color;
            padding-right: 10px;
        }

        @media screen and (max-width:481px) {
            margin-left: 0;
        }
    }

    .content-box {

        margin-left: 14%;
        margin-right: 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width:481px) {
            margin-left: 8%;
            margin-right: 0;
        }

        .article-item {

            width: 40%;
            margin-bottom: 2%;
            min-height: 5rem;
            border-radius: 16px;
            border: 1px solid #b1b1b1;
            box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
            transition: 0.5s;

            @media screen and (max-width:481px) {
                width: 100%;
                margin-bottom: 8%;
            }

            .article-item-link {

                position: relative;
                display: flex;
                align-items: center;


                //當滑鼠碰到這篇文章時,改變字體顏色+圖片放大
                &:hover {
                    cursor: pointer;
                    background: $main-hover-bg;

                    .article-img-box {
                        img {
                            scale: (1.05);
                        }
                    }
                }

                .article-img-box {
                    position: relative;
                    max-width: 6rem;
                    min-width: 6rem;
                    left: -2.3rem;


                    img {
                        transition: 0.5s;
                        width: 100%;
                        aspect-ratio: 1 / 1;
                        border: 1px solid #b1b1b1;
                        border-radius: 50%;
                        /* 也可以換成任何你想要的寬度 */
                        display: block;
                        /* 新增這行 */
                        object-fit: cover;
                        object-position: top center;
                    }
                }

                .article-info-box {
                    text-align: left;
                    white-space: pre-wrap;
                    margin-right: 0.5rem;
                    //這組合是超過三行時使用...
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;

                    .article-title {
                        text-align: left;
                        font-size: $inner-box-title-font-size;
                        color: $main-content-color;
                    }

                }

            }
        }

    }
}
</style>