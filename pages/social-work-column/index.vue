<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="家屬關懷" secoundRoute="社工專欄"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">社工專欄</h1>

            <div class="content-box">

                <article class="article-item" v-for="(item, index) in bookArticleList.records " :key="index">

                    <div class="article-info-box">
                        <h2 class="article-title">{{ item.title }}</h2>
                        <p class="article-description">
                            {{ item.description }}
                        </p>
                    </div>

                    <div class="more-box">
                        <nuxt-link class="more-btn" to="/">查看更多</nuxt-link>
                    </div>

                    <div class="circle-mask"></div>

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

    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

//設定分頁組件,currentPage當前頁數
let currentPage = ref(1)

let bookArticleList = reactive({
    pages: 1,
    size: 4,
    records: [
        {
            title: '情緒的力量',
            description: `每個人都有情緒，但卻不是每個人都有學到好的方式來整理自己的情緒或是面對別人的情緒。這與我們過往經驗有關，當我們在孩提時代身心尚未成熟，遇到生活中的各種大小事所產生的種種情緒，會需要大人來安撫我們及幫助我們認識情緒，這樣能協助孩子瞭解自己的情緒以及長出安撫自己情緒的能力。\r\n\r\n若我們身邊的大人對情緒的認識有限，甚至也不知道如何安撫孩子的情緒，那我們會學到很多保護自己的方式則是壓抑情緒。在一般日常的生活裡，壓抑情緒是個很有效率的方法，讓我們把注意力先放在要面對的工作或維繫重要的關係，但在面對我們摯愛的親友過世時的悲傷，壓抑情緒短時間或許有用，但長期下來卻會對於我們的身、心產生不良的副作用。`,
            imgUrl: 'https://www.organ.org.tw/upload/%7B638599453067666981%7D_%E6%82%B2%E5%82%B7%E7%9A%84%E5%A4%A7%E8%85%A6.jpg',
        },
        {
            title: '《如果用心去愛，必然經歷悲傷》',
            description: '我們呱呱墜地來到人世，僅有食物和保暖是無法讓我們存活下來的，還有非常重要的東西，是圍繞在我們身邊、照顧我們的家人、親友，所給予我們的擁抱、關愛的眼神、歡迎的話語及微笑中所蘊含的愛的滋養，讓我們能夠順利成長。\r\n\r\n我們在愛的滋養中順利成長，也自然會以愛回報對方，在這樣的互動關係裡，我們建立起了非常重要的連結~~一份愛的關係。',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638375450668952219%7D_1.jpg',
        },
        {
            title: '情緒的力量',
            description: `每個人都有情緒，但卻不是每個人都有學到好的方式來整理自己的情緒或是面對別人的情緒。這與我們過往經驗有關，當我們在孩提時代身心尚未成熟，遇到生活中的各種大小事所產生的種種情緒，會需要大人來安撫我們及幫助我們認識情緒，這樣能協助孩子瞭解自己的情緒以及長出安撫自己情緒的能力。\r\n\r\n若我們身邊的大人對情緒的認識有限，甚至也不知道如何安撫孩子的情緒，那我們會學到很多保護自己的方式則是壓抑情緒。在一般日常的生活裡，壓抑情緒是個很有效率的方法，讓我們把注意力先放在要面對的工作或維繫重要的關係，但在面對我們摯愛的親友過世時的悲傷，壓抑情緒短時間或許有用，但長期下來卻會對於我們的身、心產生不良的副作用。`,
            imgUrl: 'https://www.organ.org.tw/upload/%7B638599453067666981%7D_%E6%82%B2%E5%82%B7%E7%9A%84%E5%A4%A7%E8%85%A6.jpg',
        },
        {
            title: '《如果用心去愛，必然經歷悲傷》',
            description: '我們呱呱墜地來到人世，僅有食物和保暖是無法讓我們存活下來的，還有非常重要的東西，是圍繞在我們身邊、照顧我們的家人、親友，所給予我們的擁抱、關愛的眼神、歡迎的話語及微笑中所蘊含的愛的滋養，讓我們能夠順利成長。\r\n\r\n我們在愛的滋養中順利成長，也自然會以愛回報對方，在這樣的互動關係裡，我們建立起了非常重要的連結~~一份愛的關係。',
            imgUrl: 'https://www.organ.org.tw/upload/%7B638375450668952219%7D_1.jpg',
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
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width:850px) {
            margin-top: 8%;
        }

        @media screen and (max-width:481px) {
            margin-left: 0;
        }


        .article-item {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 43%;
            padding: 0 2.5%;
            padding-top: 3rem;
            margin-bottom: 5rem;
            min-height: 5rem;
            border: 2px solid $main-content-color;
            border-radius: 48px;

            @media screen and (max-width:480px) {
                width: 100%;
            }


            .article-info-box {
                text-align: left;
                white-space: pre-wrap;

                .article-title {
                    text-align: center;
                    font-size: 1.2rem;
                    margin: 1rem 0;
                }

                .article-description {
                    color: $main-content-color;

                    @media screen and (max-width:481px) {
                        //這組合是超過三行時使用...
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 6;
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
                    background-color: $sub-color;
                    width: 40%;
                    margin: 0 auto;
                    padding: 0.5rem 0;
                    border-radius: 8px;
                    letter-spacing: 0.1rem;
                    border: none;
                    font-weight: normal;
                    transition: 0.5s;

                    &:hover {
                        cursor: pointer;
                        background-color: $sub-hover-bg;
                        color: $sub-hover-text;
                    }

                }
            }


            /**圓形遮罩 */
            .circle-mask {
                position: absolute;
                top: 0;
                left: 50%;
                width: 3.5rem;
                height: 3.5rem;
                border: 3px solid #fff;
                border-radius: 50%;
                background-color: $sub-color;
                transform: translate(-50%, -50%);
            }


        }

    }
}
</style>