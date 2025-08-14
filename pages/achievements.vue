<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="歷年成果(簽卡分析)"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">歷年成果(簽卡分析)</h1>

            <div class="content-box">

                <article class="paragraph">
                    <h2 class="sub-title common-label">年度工作報告</h2>

                    <div class="sticky-notes-box">

                        <nuxt-link class="article-item" v-for="(item, index) in workResultFileList " :key="item.fileId"
                            target="_blank" :to="'minio' + item.path">

                            <div class="article-info-box">

                                <h2 class="article-title">
                                    <span class="number">{{ item.name }}</span>年
                                    <br>
                                    工作成果
                                </h2>

                            </div>

                        </nuxt-link>
                    </div>

                </article>

                <article class="paragraph">
                    <h2 class="sub-title common-label">年度簽卡分析</h2>
                    <div class="sticky-notes-box">

                        <nuxt-link class="article-item" v-for="(item, index) in dataAnalysisFileList "
                            :key="item.fileId" target="_blank" :to="'minio' + item.path">

                            <div class="article-info-box">

                                <h2 class="article-title">
                                    <span class="number">{{ item.name }}</span>年
                                    <br>
                                    簽卡分析
                                </h2>

                            </div>

                        </nuxt-link>
                    </div>

                </article>


            </div>


        </section>

    </div>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

//SEO
useSeoMeta({
    title: '歷年成果',
    titleTemplate: '%s | 社團法人中華民國器官捐贈協會',
    description: '展示協會歷年在器官捐贈推廣、教育活動與社會影響上的成果與數據。',
    ogTitle: '歷年成果｜推廣器官捐贈的實際行動',
    ogDescription: '透過數據與案例，呈現我們在器官捐贈推廣上的努力與影響力。',
    keywords: '器官捐贈成果, 公益成果, 器官移植推廣'
})

const GROUP = "achievementsFile"

const workResult = "工作報告"
const dataAnalysis = "簽卡分析"

let workResultFileList = reactive<Record<string, any>[]>([])
let dataAnalysisFileList = reactive<Record<string, any>[]>([])

//獲取工作成果所有檔案的資料
const getWorkResultFileList = async () => {
    let { data: response, pending } = await SSRrequest.get(`file/${GROUP}/${workResult}`, {})

    // 直接更新 fileList 的值
    if (response.value?.data) {
        Object.assign(workResultFileList, response.value.data)
    }

}

//獲取簽卡分析所有檔案的資料
const getdataAnalysisFileList = async () => {
    let { data: response, pending } = await SSRrequest.get(`file/${GROUP}/${dataAnalysis}`, {})

    // 直接更新 fileList 的值
    if (response.value?.data) {
        Object.assign(dataAnalysisFileList, response.value.data)
    }

}

//立即執行獲取資料
await getWorkResultFileList()
await getdataAnalysisFileList()




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

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .paragraph {
            margin: 3% 0;

            .sticky-notes-box {
                margin: 3% 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;

                .article-item {
                    margin: 0 1.5%;
                    background-image: url('@/assets/img/sticky-notes.png');
                    // background: url("@/assets/img/sticky-notes.png");
                    filter: drop-shadow(5px 8px 7px rgba(0, 0, 0, 0.5));
                    background-size: contain;
                    background-repeat: no-repeat; // 防止圖片重複
                    background-position: center; // 將圖片置中
                    transition: 0.5s;

                    @media screen and (max-width:850px) {
                        margin: 1.5% 1.5%;

                    }

                    @media screen and (max-width:480px) {
                        margin: 1.5% 0;
                    }

                    &:hover {
                        scale: 1.1;
                    }

                    .article-title {
                        font-size: 2.2rem;
                        padding: 3.5rem;
                        text-align: center;
                        color: $main-color;

                        @media screen and (max-width:850px) {
                            font-size: 1.8rem;
                        }

                        @media screen and (max-width: 480px) {
                            padding: 3rem 5rem;
                        }

                        .number {
                            font-size: 4rem
                        }
                    }

                }




            }

        }

        .sub-title {
            font-size: 1.2rem;
        }

        .download-file-box {
            display: flex;
            flex-direction: column;
            margin-left: 2.5rem;

            @media screen and (max-width:480px) {
                margin-left: 1rem;
            }

            .download-link {
                margin: 0.5rem;
                /** 這邊是為了將a標籤從flex block 狀態,改為inline block 狀態  */
                align-self: flex-start;
            }

        }
    }
}
</style>
