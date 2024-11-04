<!--  -->
<template>

    <Breadcrumbs firstRoute="認識器捐" secoundRoute="器捐學堂"></Breadcrumbs>

    <section class="common-seciton">

        <h1 class="common-title">器捐學堂</h1>

        <div class="content-box">

            <article class="article-item" v-for="(item, index) in bookArticleList.records " :key="index">
                <div class="article-img-box">
                    <img class="article-img" :src="item.imgUrl">
                </div>

                <div class="article-info-box">
                    <h2 class="article-title">{{ item.title }}</h2>
                    <p class="article-description">
                        {{ item.description }}
                    </p>
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
    size: 9,
    records: [
        {
            title: '年紀太大不能器捐？',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '認識器官捐贈 – 簽卡FAQ',
            description: '2021年不只是器捐簽卡同意書信件如雪片般飛來，不論是官網留言、粉專提問或是致電協會，民眾諮詢也是同樣踴躍，那麼哪些問題是大家常常詢問的呢？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '年紀太大不能器捐？',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '年紀太大不能器捐？',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '認識器官捐贈 – 簽卡FAQ',
            description: '2021年不只是器捐簽卡同意書信件如雪片般飛來，不論是官網留言、粉專提問或是致電協會，民眾諮詢也是同樣踴躍，那麼哪些問題是大家常常詢問的呢？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '年紀太大不能器捐？',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '年紀太大不能器捐？',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '認識器官捐贈 – 簽卡FAQ',
            description: '2021年不只是器捐簽卡同意書信件如雪片般飛來，不論是官網留言、粉專提問或是致電協會，民眾諮詢也是同樣踴躍，那麼哪些問題是大家常常詢問的呢？',
            imgUrl: '/img/default-article-img.jpg',
        },
        {
            title: '年紀太大不能器捐？',
            description: '簽署器捐同意書有年齡限制嘛？',
            imgUrl: '/img/default-article-img.jpg',
        },
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

        .article-item {
            margin-bottom: 5%;
            width: 30%;

            //當滑鼠碰到這篇文章時,改變字體顏色+圖片放大
            &:hover {
                cursor: pointer;

                .article-img-box {
                    img {
                        scale: (1.05);
                    }
                }
            }

            @media screen and (max-width:480px) {
                width: 75%;
                margin: 0 auto;
            }

            .article-img-box {
                img {
                    transition: 0.5s;
                    aspect-ratio: 4/3;
                    width: 100%;
                    /* 也可以換成任何你想要的寬度 */
                    display: block;
                    /* 新增這行 */
                    object-fit: fill;
                    object-position: top center;
                    border-radius: 16px;
                }
            }

            .article-info-box {
                text-align: left;

                .article-title {
                    font-size: 1.2rem;
                    margin: 0.8rem 0;
                }

                .article-description {
                    color: $main-content-color;
                    //這組合是超過三行時使用...
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;

                }

            }



        }

    }
}
</style>