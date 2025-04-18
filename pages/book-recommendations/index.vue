<!--  -->
<template>
    <div>

        <Breadcrumbs firstRoute="家屬關懷" secoundRoute="好書推薦"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">好書推薦</h1>

            <div class="content-box">

                <transition-group name="pagination">

                    <article class="book-article-item" v-for="(item, index) in articleList.records "
                        :key="item.articleId">
                        <div class="book-article-img-box">
                            <img class="book-article-img" :src="`minio${item.coverThumbnailUrl}`">
                        </div>

                        <div class="book-article-info-box">
                            <h2 class="book-article-title">{{ item.title }}</h2>
                            <p class="book-article-description">
                                {{ item.description }}
                            </p>
                        </div>

                        <div class="more-box">
                            <nuxt-link class="more-btn"
                                :to="{ name: 'book-recommendations-id', params: { id: item.articleId } }">查看更多</nuxt-link>
                        </div>

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

//根據裝置預設顯示數量
// const defaultSize = ref(useState('currentSize', () => useIsMobile().value ? 4 : 4))
const defaultSize = ref(useIsMobile().value ? 4 : 6)

//拿到更新路由分頁參數 以及 獲取當前分頁參數的function
const updatePaginationParams = useUpdatePaginationParams()
//傳續判斷裝置後的預設值,這個就是分頁的size
const { page, size } = useGetPaginationParams(defaultSize.value)


//設定分頁組件,currentPage當前頁數
let currentPage = ref(page)
let currentSize = ref(size)

const GROUP = "bookRecommendations"

let articleList = reactive({
    pages: 1,
    size: 4,
    records: [
        {
            articleId: '',
            title: '',
            description: '',
            coverThumbnailUrl: ''
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

    }

}

//立即執行獲取資料
await getArticleList(currentPage.value, currentSize.value)

//監聽當前頁數的變化,如果有更動就call API 獲取數組數據
watch(currentPage, (value, oldValue) => {

    //更新URL參數以及獲取新的分頁資料
    updatePaginationParams(value, currentSize.value)
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
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .book-article-item {
            margin-bottom: 2%;
            width: 26%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media screen and (max-width:480px) {
                width: 45%;
                margin: 0 auto;

            }

            .book-article-img-box {
                img {
                    aspect-ratio: 3/4;
                    width: 100%;

                    /* 也可以換成任何你想要的寬度 */
                    display: block;
                    /* 新增這行 */
                    object-fit: cover;
                    object-position: top center;
                    border-radius: 16px;
                }
            }

            .book-article-info-box {
                text-align: center;

                .book-article-title {
                    font-size: 1.2rem;
                    margin: 0.3rem 0;
                }

                .book-article-description {
                    color: $main-content-color;

                    @media screen and (max-width:481px) {
                        //這組合是超過三行時使用...
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 4;
                        overflow: hidden;
                    }
                }
            }

            .more-box {
                margin: 1.5rem 0;
                text-align: center;

                .more-btn {
                    display: block;
                    color: #fff;
                    background: $sub-color;
                    width: 75%;
                    margin: 0 auto;
                    padding: 0.5rem 0;
                    border-radius: 8px;
                    letter-spacing: 0.1rem;
                    border: none;
                    font-weight: normal;
                    transition: 0.5s;

                    &:hover {
                        cursor: pointer;
                        background: $sub-hover-bg;
                        color: $sub-hover-text;
                    }

                }
            }

        }

    }
}
</style>