<!--  -->
<template>


    <section class="common-seciton">

        <h1 class="common-title">最新消息</h1>

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

</template>

<script setup lang='ts'>

import { descriptionProps } from 'element-plus';
import { ref, reactive } from 'vue'

//設定分頁組件,currentPage當前頁數
let currentPage = ref(1)


let articleList = reactive({
    pages: 1,
    size: 4,
    records: [
        {
            title: '怡馨調心成長工作房-中區',
            description: '身體與心理是一體的兩面，兩者有著互相影響、密不可分的關係，今年我們邀請芳療師和身體工作的經絡老師，來跟大家分享如何運用香氣、經絡按摩的方法來照顧好自己的身體與心理，才有更多力量面對生活的種種挑戰，歡迎大家一起來學期吧',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1006/format:webp/1*4j2A9niz0eq-mRaCPUffpg.png',
        },
        {
            title: '怡馨調心成長工作房-中區',
            description: '身體與心理是一體的兩面，兩者有著互相影響、密不可分的關係，今年我們邀請芳療師和身體工作的經絡老師，來跟大家分享如何運用香氣、經絡按摩的方法來照顧好自己的身體與心理，才有更多力量面對生活的種種挑戰，歡迎大家一起來學期吧',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1006/format:webp/1*4j2A9niz0eq-mRaCPUffpg.png',
        },
        {
            title: '怡馨調心成長工作房-中區',
            description: '身體與心理是一體的兩面，兩者有著互相影響、密不可分的關係，今年我們邀請芳療師和身體工作的經絡老師，來跟大家分享如何運用香氣、經絡按摩的方法來照顧好自己的身體與心理，才有更多力量面對生活的種種挑戰，歡迎大家一起來學期吧',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1006/format:webp/1*4j2A9niz0eq-mRaCPUffpg.png',
        },
        {
            title: '怡馨調心成長工作房-中區',
            description: '身體與心理是一體的兩面，兩者有著互相影響、密不可分的關係，今年我們邀請芳療師和身體工作的經絡老師，來跟大家分享如何運用香氣、經絡按摩的方法來照顧好自己的身體與心理，才有更多力量面對生活的種種挑戰，歡迎大家一起來學期吧',
            imgUrl: 'https://miro.medium.com/v2/resize:fit:1006/format:webp/1*4j2A9niz0eq-mRaCPUffpg.png',
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

        .article-item {
            display: flex;
            margin: 3% 0;


            .article-img-box {
                max-width: 15rem;

                img {
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
                }

            }


        }

    }
}
</style>
