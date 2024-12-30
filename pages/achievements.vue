<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="歷年成果(簽卡分析)"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">歷年成果(簽卡分析)</h1>

            <div class="content-box">

                <article class="paragraph">
                    <h2 class="sub-title common-label">年度工作報告</h2>

                    <div class="journal-box">

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
                    <div class="journal-box">

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

console.log("這是工作成果: ", workResultFileList)
console.log("這是簽卡分析: ", dataAnalysisFileList)


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

            .journal-box {
                margin-top: 3%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;

                .article-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 5%;
                    margin-right: 4.5%;
                    border-radius: 50%;
                    border: 3px solid $sub-color;
                    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
                    width: 200px;
                    height: 200px;
                    transition: 0.5s;
                    color: $sub-color;

                    //當滑鼠碰到這篇文章時,改變字體顏色+圖片放大
                    &:hover {
                        cursor: pointer;
                        background: $sub-color ;

                        .article-title {
                            color: #fff !important;
                        }

                    }

                    @media screen and (max-width:810px) {
                        width: 155px;
                        height: 155px;
                        margin: 5% auto;
                    }

                    @media screen and (max-width:480px) {
                        width: 90px;
                        height: 90px;
                        margin: 5% auto;
                    }


                    .article-info-box {
                        color: $sub-color;

                        .article-title {
                            font-size: 1.5rem;
                            color: $sub-color;

                            @media screen and (max-width:480px) {
                                font-size: 1.3rem;
                            }

                            .number {
                                font-size: 3rem;

                                @media screen and (max-width:480px) {
                                    font-size: 2.7rem;
                                }
                            }

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
