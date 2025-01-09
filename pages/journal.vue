<!--  -->
<template>
    <div>

        <Breadcrumbs firstRoute="認識器捐" secoundRoute="器官捐贈會刊"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">器官捐贈會刊</h1>

            <div class="content-box">

                <div class="journal-box">

                    <nuxt-link class="article-item" v-for="(item, index) in displayedJournaList " :key="item.fileId"
                        target="_blank" :to="'minio' + item.path">

                        <div class="article-info-box">

                            <h2 class="article-title">NO.
                                <span class="number">{{ item.name }}</span>
                                <br>
                                電子會刊
                            </h2>

                        </div>

                    </nuxt-link>
                </div>

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

const GROUP = "journalFile"

let showFullList = ref(false)

let journaFullList = reactive<Record<string, any>[]>(
    [
       
    ]
)


const getJournaFullList = async () => {
    let { data: response, pending } = await SSRrequest.get(`file/${GROUP}`, {})

    // 直接更新 fileList 的值
    if (response.value?.data) {
        Object.assign(journaFullList, response.value.data)
    }

}

//立即執行獲取資料
await getJournaFullList()

//初始化名單,原始名單的前12位,slice 會返回一個新數組
let initJournaList = computed(() => { return journaFullList.slice(0, 12); })

//顯示名單,根據情況顯示前12個,或是全部
let displayedJournaList = reactive([...initJournaList.value])

//獲取其他List
const getOtherList = () => {
    if (!showFullList.value) {
        // 清空原数组并赋值全部数据
        displayedJournaList.splice(0, displayedJournaList.length, ...journaFullList);
        showFullList.value = true
        console.log(displayedJournaList)

    } else {

        // 清空原数组并赋值前12个元素
        displayedJournaList.splice(0, displayedJournaList.length, ...journaFullList.slice(0, 12));
        showFullList.value = false
    }
}



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

        .journal-box {
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





        /**用來觸發查看更多的按鈕 */
        .more-box {
            text-align: center;
            margin: 0 auto;

            .more-btn {
                color: #fff;
                background: $sub-color;
                padding: 1rem 5rem;
                border-radius: 16px;
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
</style>