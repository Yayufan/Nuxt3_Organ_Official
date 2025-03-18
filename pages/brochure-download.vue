<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="認識器捐" secoundRoute="文宣下載"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">文宣下載</h1>

            <div class="content-box">

                <article class="article-item" v-for="(item, index) in promotionalFileList " :key="item.fileId">
                    <div class="article-img-box">
                        <img class="article-img" :src="`/minio${item.coverThumbnailUrl}`">
                    </div>

                    <div class="article-info-box">
                        <div class="base-info">
                            <h2 class="article-title">{{ item.description }}</h2>
                            <p class="article-description">
                                {{ item.description }}
                            </p>
                        </div>
                        <div class="download-box">
                            <a class="download-btn" :href="`/minio${item.path}`" target="_blank">Download</a>
                        </div>

                    </div>

                </article>

                <!-- 
        分頁插件 total為總資料數(這邊設置20筆),  default-page-size代表每頁顯示資料(預設為10筆,這邊設置為5筆) 
        current-page當前頁數,官方建議使用v-model與current-page去與自己設定的變量做綁定,
        -->
                <!-- <div class="common-pagination">
                    <el-pagination layout="prev, pager, next" :page-count="Number(articleList.pages)"
                        :default-page-size="Number(articleList.size)" v-model:current-page="currentPage"
                        :hide-on-single-page="true" :pager-count="5" />
                </div> -->
            </div>
        </section>

    </div>

</template>

<script setup lang='ts'>

import { descriptionProps } from 'element-plus';
import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

const GROUP = "promotional"

let promotionalFileList = reactive<Record<string, any>[]>([])


//獲取工作成果所有檔案的資料
const getPromotionalFileList = async () => {
    let { data: response, pending } = await SSRrequest.get(`file/${GROUP}`, {})

    // 直接更新 fileList 的值
    if (response.value?.data) {
        Object.assign(promotionalFileList, response.value.data)
    }
    console.log("返回數組: ",promotionalFileList)

}

//立即執行獲取資料
await getPromotionalFileList()


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

        @media screen and (max-width:481px) {
            margin-left: 0;
            margin-right: 0;
        }

        .article-item {
            display: flex;
            margin-bottom: 8%;


            .article-img-box {
                max-width: 50%;

                img {
                    aspect-ratio: 4 / 3;
                    width: 100%;
                    /* 也可以換成任何你想要的寬度 */
                    display: block;
                    /* 新增這行 */
                    object-fit: cover;
                    object-position: top center;
                    border-radius: 16px;
                }

            }

            .article-info-box {
                margin-left: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .base-info {

                    .article-title {
                        font-size: $inner-box-title-font-size;
                    }

                    .article-description {
                        margin-top: 1rem;
                        color: $main-content-color;
                        font-size: $inner-box-font-size;
                    }
                }


                .download-box {
                    display: contents;

                    .download-btn {
                        color: #fff;
                        background: $main-color;
                        padding: 0.5rem 3rem;
                        border-radius: 16px;
                        font-weight: 550;
                        transition: 0.5s;

                        &::after {
                            content: '';
                            display: inline-block;
                            width: 1.2rem;
                            height: 1.2rem;
                            position: relative;
                            top: 0.3rem;
                            margin-left: 0.5rem;
                            background: url("@/assets/img/download-file-white.svg") no-repeat;
                            background-size: contain;
                            /* 確保圖標縮放到合適尺寸 */
                        }

                        &:hover {
                            cursor: pointer;
                            font-size: 1.1rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
