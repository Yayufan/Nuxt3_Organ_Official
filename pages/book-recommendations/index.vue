<!--  -->
<template>

    <Breadcrumbs firstRoute="家屬關懷" secoundRoute="好書推薦"></Breadcrumbs>

    <section class="common-seciton">

        <h1 class="common-title">好書推薦</h1>

        <div class="content-box">

            <article class="book-article-item" v-for="(item, index) in bookArticleList.records " :key="index">
                <div class="book-article-img-box">
                    <img class="book-article-img" :src="item.imgUrl">
                </div>

                <div class="book-article-info-box">
                    <h2 class="book-article-title">{{ item.title }}</h2>
                    <p class="book-article-description">
                        {{ item.description }}
                    </p>
                </div>

                <div class="more-box">
                    <nuxt-link class="more-btn" to="/">查看更多</nuxt-link>
                </div>

            </article>

            <!-- 
        分頁插件 total為總資料數(這邊設置20筆),  default-page-size代表每頁顯示資料(預設為10筆,這邊設置為5筆) 
        current-page當前頁數,官方建議使用v-model與current-page去與自己設定的變量做綁定,
        -->
            <div class="common-pagination">
                <el-pagination layout="prev, pager, next" :page-count="Number(bookArticleList.pages)"
                    :default-page-size="Number(bookArticleList.size)" v-model:current-page="currentPage"
                    :hide-on-single-page="true" :pager-count="5" />
            </div>

        </div>


    </section>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

//設定分頁組件,currentPage當前頁數
let currentPage = ref(1)

let bookArticleList = reactive({
    pages: 9,
    size: 6,
    records: [
        {
            title: '悲傷的大腦',
            description: '一位心理神經免疫學者的傷慟考，從腦科學探究失去摯愛的悲痛與修復',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638599453067666981%7D_%E6%82%B2%E5%82%B7%E7%9A%84%E5%A4%A7%E8%85%A6.jpg',
        },
        {
            title: '悲傷的大腦',
            description: '一位心理神經免疫學者的傷慟考，從腦科學探究失去摯愛的悲痛與修復',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638375450668952219%7D_1.jpg',
        },
        {
            title: '悲傷的大腦',
            description: '一位心理神經免疫學者的傷慟考，從腦科學探究失去摯愛的悲痛與修復',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638375448517077126%7D_%E4%BD%A0%E5%80%BC%E5%BE%97%E5%A5%BD%E5%A5%BD%E6%82%B2%E5%82%B7.jpg',
        },
        {
            title: '悲傷的大腦',
            description: '一位心理神經免疫學者的傷慟考，從腦科學探究失去摯愛的悲痛與修復',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638375445637921884%7D_1.jpg',
        },
        {
            title: '悲傷的大腦',
            description: '一位心理神經免疫學者的傷慟考，從腦科學探究失去摯愛的悲痛與修復',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638375445637921884%7D_1.jpg',
        },
        {
            title: '悲傷的大腦',
            description: '一位心理神經免疫學者的傷慟考，從腦科學探究失去摯愛的悲痛與修復',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638375445637921884%7D_1.jpg',
        }
    ]
})




</script>

<style scoped lang="scss">
.common-seciton {
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
    }

    .content-box {
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .book-article-item {
            margin-bottom: 2%;
            width: 26%;

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
                }

            }

            .more-box {
                margin: 1.5rem 0;
                text-align: center;

                .more-btn {
                    display: block;
                    color: #fff;
                    background-color: $sub-color;
                    width: 75%;
                    margin: 0 auto;
                    padding: 0.5rem 0;
                    border-radius: 8px;
                    letter-spacing: 0.1rem;
                    border: none;
                    font-weight: normal;

                    &:hover {
                        cursor: pointer;
                    }

                }
            }

        }

    }
}
</style>