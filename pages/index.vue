<template>
    <main class="main">
        <div class="carousel-box">
            <el-carousel arrow="always" indicator-position="outside">
                <el-carousel-item v-for="(item, index) in homeCarouselList" :key="item.fileId">
                    <img :src="'minio' + item.path" :alt="item.name">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="paragraph">
            <p class="title">最新消息</p>
            <div class="article-box">

                <nuxt-link class="news-item" :to="`/news/${item.articleId}`" v-for="(item, index) in newsList.records"
                    :key="item.articleId">
                    {{ item.title }}
                </nuxt-link>
            </div>
        </div>

        <div class="paragraph">
            <p class="title">活動花絮</p>
            <div class="article-box">
                <nuxt-link class="event-highlight-item" :to="`/event-highlights/${item.articleId}`"
                    v-for="(item, index) in eventHighlightsList.records" :key="item.articleId">
                    {{ item.title }}
                </nuxt-link>
            </div>
        </div>

        <div class="paragraph join-us-board">
            <p class="title">快速連結</p>
            <div class="icon-link-box">
                <div class="link-item">
                    <nuxt-link to="/news">
                        <img src="@/assets/img/purpose-icon.png" alt="">
                    </nuxt-link>
                    <p>最新消息</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/organ-donation">
                        <img src="@/assets/img/become-member-icon.png" alt="">
                    </nuxt-link>
                    <p>認識器捐</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/donate">
                        <img src="@/assets/img/association-chronology-icon.png" alt="">
                    </nuxt-link>
                    <p>線上捐款</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/sign-online">
                        <img src="@/assets/img/achievements-icon.png" alt="">
                    </nuxt-link>
                    <p>簽署器捐</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/assistance-resources">
                        <img src="@/assets/img/family-support-icon.png" alt="">
                    </nuxt-link>
                    <p>家屬關懷</p>
                </div>
            </div>
        </div>

        <div class="paragraph sponsor-box">
            <ClientOnly>
                <Vue3Marquee :gradient="true" :gradient-color="[255, 255, 255]" gradient-length="30%"
                    :pause-on-hover="true" :clone="true">
                    <a v-for="(item,index) in sponsorCarouselList" :key="item.fileId"  class="img-link" target="_blank" :href=item.link>
                        <img :src="'minio' + item.path" :alt="item.name" />
                    </a>
                </Vue3Marquee>
            </ClientOnly>
        </div>

    </main>
</template>

<script setup lang='ts'>
import Vue3Marquee from 'vue3-marquee'

/**-------------獲取輪播圖圖片-------------------------- */

const HOME_CAROUSEL_GROUP = "homeCarousel"

let homeCarouselList = reactive<Record<string, any>[]>([])

const getHomeCarouselList = async () => {
    let { data: response, pending } = await SSRrequest.get(`file/${HOME_CAROUSEL_GROUP}`)

    // 直接更新 fileList 的值
    if (response.value?.data) {
        Object.assign(homeCarouselList, response.value.data)
    }

    console.log('這是獲取的檔案: ', homeCarouselList)

}

//立即執行獲取資料
await getHomeCarouselList()

/**----------廣告跑馬燈圖片--------------------- */

const SPONSOR_CAROUSEL_GROUP = "sponsorCarousel"

let sponsorCarouselList = reactive<Record<string, any>[]>([])

const getSponsorCarouselList = async () => {
    let { data: response, pending } = await SSRrequest.get(`file/${SPONSOR_CAROUSEL_GROUP}`)

    // 直接更新 fileList 的值
    if (response.value?.data) {
        Object.assign(sponsorCarouselList, response.value.data)
    }

    console.log('這是獲取廣告的檔案: ', sponsorCarouselList)

}

//立即執行獲取資料
await getSponsorCarouselList()


/**-------------獲取最新消息 和 活動花絮-------------------- */

//根據裝置預設顯示數量
const defaultSize = ref(useIsMobile().value ? 3 : 3)

//傳續判斷裝置後的預設值,這個就是分頁的size
const { page, size } = useGetPaginationParams(defaultSize.value)

//設定分頁組件,currentPage當前頁數
let currentPage = ref(page)
let currentSize = ref(size)

let newsList = reactive({
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


let eventHighlightsList = reactive({
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


//獲取最新消息的資料
const getNewsList = async (page: number, size: number) => {
    let { data: response, pending } = await SSRrequest.get(`article/news/pagination`, {
        params: {
            page,
            size
        }
    })

    // 直接更新 articleList 的值
    if (response.value?.data) {
        Object.assign(newsList, response.value.data)
    }

}

//獲取分頁文章的資料
const getEventHighlightsList = async (page: number, size: number) => {
    let { data: response, pending } = await SSRrequest.get(`article/eventHighlights/pagination`, {
        params: {
            page,
            size
        }
    })

    // 直接更新 articleList 的值
    if (response.value?.data) {
        Object.assign(eventHighlightsList, response.value.data)
    }

}


// //立即執行獲取資料
await getNewsList(currentPage.value, currentSize.value)
await getEventHighlightsList(currentPage.value, currentSize.value)

// //監聽當前頁數的變化,如果有更動就call API 獲取數組數據
watch(currentPage, (value, oldValue) => {
    getNewsList(value, currentSize.value)
    getEventHighlightsList(value, currentSize.value)
})

/**-----------------之前的------------------------- */


//頁面渲染完畢時，調用後端API，瀏覽人次+1
onMounted(() => {
    CSRrequest.get("setting/add-view-count")
})


</script>
<style lang="scss" scoped>
.main {
    width: 100%;

    @media screen and (max-width: 850px) {
        margin-top: 0.4vw;
    }

    @media screen and (max-width: 850px) {
        margin-top: 0.4vw;
    }

    .carousel-box {

        .el-carousel {
            height: 400px;
            max-width: 100%; //原本為100%

            @media screen and (max-width: 850px) {
                height: 200px;
            }

            /** 20241214新增 */
            .el-carousel__item {
                border-radius: 16px;
            }

            img {
                width: 100%;
                /**以下為新增的地方 */
                border-radius: 16px;

                @media screen and (max-width: 850px) {
                    height: 100%;
                }
            }

            :deep(.el-carousel__container) {
                height: 100%;
            }

            :deep(.el-carousel__arrow) {
                background-color: $main-color;
                // margin-bottom: 3%;
                top: 40%;
            }

            :deep(.el-carousel__arrow--left) {
                margin-left: 3%;
            }

            :deep(.el-carousel__arrow--right) {
                margin-right: 3%;
            }

            :deep(.el-icon),
            :deep(.el-icon svg) {
                width: 2rem;
                height: 2rem;
            }

            :deep(.el-carousel__button) {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
            }
        }
    }


    .paragraph {
        margin: 3% 0;

        .title {
            margin-left: 10%;
            color: #E99B67;
            font-size: 1.5rem;

            @media screen and (max-width: 850px) {
                margin-left: 3.5%;
            }

            &::before {
                display: inline;
                content: "";
                border-left: 3px solid $main-color;
                padding-right: 10px;
            }

        }


        .article-box {
            padding: 0;
            margin-left: 10%;
            margin-right: 10%;
            font-size: 1.3rem;
            list-style-type: none;

            @media screen and (max-width: 850px) {
                margin-left: 3.5%;
            }

            .news-item {
                color: black;
                line-height: 1.5;
                padding: 1rem 0;
                padding-left: 1rem;
                display: block;
                background: url("@/assets/img/event-highlight-bg.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: center center;
                transition: 0.5s;

                &:hover {
                    cursor: pointer;
                    font-size: 1.4rem;
                }

            }

            .event-highlight-item {
                color: black;
                line-height: 1.5;
                padding: 1rem 0;
                padding-left: 1rem;
                display: block;
                background: url("@/assets/img/event-highlight-bg.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: center center;
                transition: 0.5s;

                &:hover {
                    cursor: pointer;
                    font-size: 1.4rem;
                }

            }
        }

    }

    .join-us-board {
        width: 100%;
        justify-content: center;
        margin-top: 3%;
        margin-bottom: 3%;


        .icon-link-box {
            display: flex;
            margin: 3% 0 0 10%;

            @media screen and (max-width: 850px) {
                max-width: 85%;
                margin-left: 5%;
                justify-content: center;
                flex-wrap: wrap;
            }

            .link-item {
                @media screen and (max-width: 850px) {
                    width: 28%;
                    margin: 0 5px 2% 5px;
                }

                margin: 0 8% 2% 0;

                // width: 100%;
                p {
                    color: #91715F;
                    font-size: $paragraph-font-size;
                    text-align: center;
                }
            }

            img {
                width: 100%;
                transition: 0.5s;

                &:hover {
                    transform: scale(1.1);
                }
            }

        }
    }

    .sponsor-box {

        .img-link {
            margin: 0 1rem;

            img {
                width: 150px;
                height: auto;
            }
        }
    }
}
</style>