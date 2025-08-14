<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="協會年表"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">協會年表</h1>

            <div class="content-box">
                <el-timeline style="max-width: 800px">

                    <el-timeline-item placement="top" v-for="(item, index) in displayedChronologyList" :key="index"
                        class="my-timeline-item" :timestamp="`民國${item.year}年`">

                        <ul class="timeline-item-content">
                            <!-- <li v-for="(content, index) in item.content">{{ content }}
                                <img style="max-width: 150px;" src="@/assets/img/81-year-img.jpg">
                            </li> -->

                            <li class="text-timeline-item-content" v-for="(contentItem, index) in item.timeLineVO"
                                :key="contentItem.timeLineId">
                                <div class="item-text">{{ contentItem.description }}</div>

                                <img v-for="(itemImg, index) in contentItem.timeLineAttachment" :key="index" class="item-img" style="max-width: 150px;"
                                    :src="`minio${itemImg.path}`">
                            </li>

                        </ul>
                    </el-timeline-item>


                </el-timeline>

                <div class="more-box">
                    <button v-if="!showFullList" class="more-btn" @click="getOtherList">查看更多</button>
                    <button v-else class="more-btn" @click="getOtherList"> 收起更多 </button>
                </div>


            </div>
        </section>

    </div>
</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

useSeoMeta({
    title: '協會年表',
    titleTemplate: '%s | 社團法人中華民國器官捐贈協會',
    description: '回顧本協會自成立以來的重要發展與里程碑，見證器官捐贈推廣的歷程。',
    ogTitle: '協會年表｜器官捐贈推廣歷程',
    ogDescription: '瀏覽協會的年度大事記，了解我們在器官捐贈推廣上的努力與成就。',
    keywords: '協會年表, 器官捐贈歷史, 推廣年表'
})

let showFullList = ref(false)

//原始名單
let originalList = reactive<Record<string,any>[]>([])

//獲取理監事團隊資料
const getTimeLineList = async () => {
    let { data: response, pending } = await SSRrequest.get(`time-line/tree`, {})

    // 直接更新 originalList 的值
    if (response.value?.data) {
        Object.assign(originalList, response.value.data)
        console.log("原始名單: ",originalList)
    }

}

//立即執行獲取資料
await getTimeLineList()

//初始化名單,原始名單的前五位,slice 會返回一個新數組
let initChronologyList = computed(() => { return originalList.slice(0, 5); })

//顯示名單,根據情況顯示前五個,或是全部
let displayedChronologyList = reactive<Record<string,any>[]>([...initChronologyList.value])

//獲取其他List
const getOtherList = () => {
    if (!showFullList.value) {
        // 清空原数组并赋值全部数据
        displayedChronologyList.splice(0, displayedChronologyList.length, ...originalList);
        showFullList.value = true

    } else {

        // 清空原数组并赋值前五个元素
        displayedChronologyList.splice(0, displayedChronologyList.length, ...originalList.slice(0, 5));
        showFullList.value = false
    }
}


</script>

<style scoped lang="scss">
.common-section {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    @media screen and (max-width:850px) {
        margin: 3% 0;
    }

    @media screen and (max-width:481px) {
        margin: 3% 0 3% 1%;
    }


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

            .el-timeline {
                padding-left: 0;
            }

        }

        .paragraph {
            margin: 3% 0;
        }


        /** 覆寫element plus組件  */

        :deep(.el-timeline-item__node) {
            background-color: $main-color;
        }

        :deep(.el-timeline-item__tail) {
            border-left: 2px solid $main-color;
        }

        :deep(.el-timeline-item__timestamp) {
            font-size: $inner-box-title-font-size;
            font-weight: 550;
            color: $main-color;
            letter-spacing: 0.1rem;
        }


        :deep(.el-timeline-item__content) {
            font-size: $inner-box-font-size;
        }


        .timeline-item-content {
            margin-left: -22px;
            list-style-type: disc;
            color: black;

            li {

                &::marker {
                    font-size: $inner-box-title-font-size;
                    color: pink;
                }
            }

        }

        /**用來觸發查看更多歷屆理監事的按鈕 */
        .more-box {
            margin: 2% 0;
            text-align: center;

            .more-btn {
                color: #fff;
                background: $main-color;
                padding: 1rem 5rem;
                border-radius: 16px;
                letter-spacing: 0.1rem;
                border: none;
                font-weight: normal;
                transition: 0.5s;

                &:hover {
                    cursor: pointer;
                    background: $main-hover-btn-bg;
                    color: $main-hover-btn-text;
                }
            }
        }

    }
}
</style>
