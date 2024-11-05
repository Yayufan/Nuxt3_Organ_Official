<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="訊息看板" secoundRoute="活動花絮"></Breadcrumbs>

        <section class="common-seciton">

            <h1 class="common-title">活動花絮</h1>

            <div class="content-box">

                <div class="article-item" v-for="(item, index) in articleList.records " :key="index">
                    <div class="article-img-box">
                        <img class="article-img" :src="item.imgUrl">
                    </div>

                    <div class="article-info-box">
                        <h2 class="article-title">{{ item.title }}</h2>
                        <p class="article-description">
                            {{ item.description }}
                        </p>
                    </div>

                </div>

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

import { descriptionProps } from 'element-plus';
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'
import { ref, reactive } from 'vue'

//設定分頁組件,currentPage當前頁數
let currentPage = ref(1)


let articleList = reactive({
    pages: 1,
    size: 5,
    records: [
        {
            title: '語窩歡樂學苑-粉彩系列',
            description: '2021年10月25日(周六) 10:00 ~ 12:00 還有名額，親手做份小禮物給自己的親朋好友吧',
            imgUrl: 'https://exp-picture.cdn.bcebos.com/52fae62064fb960b77ff67d28fa355e982ae6c71.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_640%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80',
        },
        {
            title: '語窩歡樂學苑-粉彩系列',
            description: '2021年10月25日(周六) 10:00 ~ 12:00 還有名額，親手做份小禮物給自己的親朋好友吧',
            imgUrl: 'https://exp-picture.cdn.bcebos.com/52fae62064fb960b77ff67d28fa355e982ae6c71.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_640%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80',
        },
        {
            title: '語窩歡樂學苑-粉彩系列',
            description: '2021年10月25日(周六) 10:00 ~ 12:00 還有名額，親手做份小禮物給自己的親朋好友吧',
            imgUrl: 'https://exp-picture.cdn.bcebos.com/52fae62064fb960b77ff67d28fa355e982ae6c71.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_640%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80',
        },
        {
            title: '語窩歡樂學苑-粉彩系列',
            description: '2021年10月25日(周六) 10:00 ~ 12:00 還有名額，親手做份小禮物給自己的親朋好友吧',
            imgUrl: 'https://exp-picture.cdn.bcebos.com/52fae62064fb960b77ff67d28fa355e982ae6c71.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_640%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80',
        },
        {
            title: '語窩歡樂學苑-粉彩系列',
            description: '2021年10月25日(周六) 10:00 ~ 12:00 還有名額，親手做份小禮物給自己的親朋好友吧',
            imgUrl: 'https://exp-picture.cdn.bcebos.com/52fae62064fb960b77ff67d28fa355e982ae6c71.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_640%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80',
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

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .article-item {
            display: flex;
            margin: 3% 0;
            transition: 0.5s;


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


            @media screen and (max-width:481px) {
                margin: 7% 0;
            }


            .article-img-box {
                max-width: 15rem;
                min-width: 145px;


                @media screen and (max-width:481px) {
                    max-width: 145px;
                }

                img {
                    transition: 0.5s;
                    width: 100%;
                    border-radius: 16px;
                }

            }

            .article-info-box {
                margin-left: 1rem;

                .article-title {
                    font-size: 1.2rem;
                    margin: 0.3rem 0;
                }

                .article-description {
                    color: $main-content-color;

                    @media screen and (max-width:480px) {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 6;
                        overflow: hidden;
                    }
                }

            }

        }
    }
}
</style>
