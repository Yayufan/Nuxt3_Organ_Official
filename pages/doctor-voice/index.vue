<!--  -->
<template>

    <div>
        
        <Breadcrumbs firstRoute="認識器捐" secoundRoute="白袍心聲"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">白袍心聲</h1>

            <div class="content-box">

                <article class="article-item" v-for="(item, index) in resourceArticleList.records " :key="index">


                    <div class="article-img-box">
                        <img class="article-img" src="@/assets/img/doctor-voice-img-01.png">
                    </div>

                    <div class="article-base">
                        <div class="article-info-box">
                            <h2 class="article-title">{{ item.title }}</h2>
                            <p class="article-description">{{ item.description }}</p>
                        </div>

                        <div class="article-more-box">
                            <button class="more-btn">查看更多</button>
                        </div>

                    </div>

                </article>


                <!-- 
        分頁插件 total為總資料數(這邊設置20筆),  default-page-size代表每頁顯示資料(預設為10筆,這邊設置為5筆) 
        current-page當前頁數,官方建議使用v-model與current-page去與自己設定的變量做綁定,
        -->
                <div class="common-pagination">
                    <el-pagination layout="prev, pager, next" :page-count="Number(resourceArticleList.pages)"
                        :default-page-size="Number(resourceArticleList.size)" v-model:current-page="currentPage"
                        :hide-on-single-page="true" :pager-count="5" />
                </div>

            </div>

        </section>

    </div>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

//設定分頁組件,currentPage當前頁數
let currentPage = ref(1)

let resourceArticleList = reactive({
    pages: 1,
    size: 4,
    records: [
        {
            title: '小明的春天',
            description: `白北榮總一般外科主治醫師 / 龍藉泉。\r\n\r\n原刊於中華民國器官捐贈協會會刊第22期 - 89年12月出刊`,
            imgUrl: 'https://www.organ.org.tw/upload/%7B638599453067666981%7D_%E6%82%B2%E5%82%B7%E7%9A%84%E5%A4%A7%E8%85%A6.jpg',
        },
        {
            title: '憶乃哥',
            description: `白北榮總一般外科主治醫師 / 龍藉泉。\r\n\r\n原刊於中華民國器官捐贈協會會刊第22期 - 89年12月出刊`,
            imgUrl: 'https://www.organ.org.tw/upload/%7B638599453067666981%7D_%E6%82%B2%E5%82%B7%E7%9A%84%E5%A4%A7%E8%85%A6.jpg',
        },
        {
            title: '小明的春天',
            description: `白北榮總一般外科主治醫師 / 龍藉泉。\r\n\r\n原刊於中華民國器官捐贈協會會刊第22期 - 89年12月出刊`,
            imgUrl: 'https://www.organ.org.tw/upload/%7B638599453067666981%7D_%E6%82%B2%E5%82%B7%E7%9A%84%E5%A4%A7%E8%85%A6.jpg',
        },
        {
            title: '憶乃哥',
            description: `白北榮總一般外科主治醫師 / 龍藉泉。\r\n\r\n原刊於中華民國器官捐贈協會會刊第22期 - 89年12月出刊`,
            imgUrl: 'https://www.organ.org.tw/upload/%7B638599453067666981%7D_%E6%82%B2%E5%82%B7%E7%9A%84%E5%A4%A7%E8%85%A6.jpg',
        },

    ]
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
            margin-left: 0;
        }


        .article-item {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 3%;
            min-height: 5rem;
            border-radius: 16px;
            border: 1px solid #b1b1b1;
            box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);


            @media screen and (max-width:481px) {
                width: 100%;
                margin-bottom: 8%;
            }


            .article-img-box {
                position: relative;
                max-width: 6rem;
                min-width: 6rem;
                left: -2.3rem;


                img {
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

            .article-base {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                width: 100%;

                .article-info-box {
                    text-align: left;
                    white-space: pre-wrap;
                    margin-right: 0.5rem;


                    .article-title {
                        text-align: left;
                        font-size: 1.3rem;
                    }

                    .article-description {
                        //這組合是超過三行時使用...
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }

                }

                .article-more-box {
                    text-align: center;
                    margin-right: 1.5rem;
                    text-wrap-mode: nowrap;

                    .more-btn {
                        color: #fff;
                        background-color: $accent-color;
                        padding: 0.5rem 3rem;
                        border-radius: 16px;
                        letter-spacing: 0.1rem;
                        border: none;
                        font-weight: normal;
                        transition: 0.5s;

                        &:hover {
                            cursor: pointer;
                            background-color: $accent-hover-bg;
                        }
                    }
                }

            }



        }

    }
}
</style>