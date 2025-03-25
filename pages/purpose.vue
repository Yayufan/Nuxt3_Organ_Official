<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="加入我們" secoundRoute="宗旨任務"></Breadcrumbs>

        <section class="common-section">



            <h1 class="common-title">宗旨任務</h1>

            <div class="content-box">

                <article class="paragraph purpose-box">
                    <h2 class="sub-title">宗旨</h2>
                    <p class="content">
                        現代移植醫學的進步已可挽救器官衰竭病患的生命，且提昇患者的生命品質，然而器官捐贈來源的短缺，
                        乃成為器官移植手術無法救人無數的阻礙，為協助醫療服務，提倡尊重生命理念，造福民眾的健康，特於
                        民國82年8月28日正式成立「社團法人中華民國器官捐贈協會」。
                    </p>
                </article>


                <article class="paragraph mission-box">
                    <h2 class="sub-title">任務</h2>
                    <ol class="content">
                        <li>促進一般民眾對器官捐贈的認知及參與。</li>
                        <li>提供醫護專業人員器官捐贈推廣之合作。</li>
                        <li>監督及協助宣導政府制定之有關器官捐贈與移植之法令。</li>
                        <li>器官捐贈者家屬之悲傷輔導與陪伴。</li>
                    </ol>
                </article>

                <article class="paragraph ">
                    <h2 class="sub-title">組織架構</h2>
                    <div class="content organizational-structure-box ">
                        <img src="@/assets/img/organizational-chart.png">
                    </div>
                </article>

                <article class="paragraph ">
                    <h2 class="sub-title">歷屆理監事</h2>
                    <div class=" supervisors-box ">

                        <div class="supervisors-item" v-for="(item, index) in displayedList" :key="item.boardMemberId">
                            <p class="supervisors-session"> 第{{ item.termNumberCn }}屆 </p>
                            <p class="supervisors-term-of-office">({{ item.startDate }} ~ {{item.endDate}})</p>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">理事長</div>：
                                <div class="supervisors-info-content">{{ item.chairperson }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">常務理事</div>：
                                <div class="supervisors-info-content">{{ item.executiveDirectors }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">理事</div>：
                                <div class="supervisors-info-content">{{ item.directors }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">常務監事</div>：
                                <div class="supervisors-info-content">{{ item.executiveSupervisor }}</div>
                            </div>

                            <div class="supervisors-info">
                                <div class="supervisors-info-label">監事</div>：
                                <div class="supervisors-info-content">{{ item.supervisors }}</div>
                            </div>

                        </div>
                    </div>

                    <div class="supervisors-more-box">
                        <button v-if="!showFullList" class="supervisors-more-btn" @click="getOtherList">查看更多</button>
                        <button v-else class="supervisors-more-btn" @click="getOtherList"> 收起更多 </button>
                    </div>

                </article>

                <article class="paragraph ">
                    <h2 class="sub-title">協會章程</h2>
                    <div class="content regulation-box">
                        <a class="download-link" href="/files/regulation_1071005.pdf"
                            target="_blank">社團法人章程-1071005修正版.pdf</a>
                    </div>

                </article>

            </div>

        </section>
    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

//原始名單
let originalList = reactive<Record<string,any>[]>([])

//是否開啟所有名單
let showFullList = ref(false)

//獲取理監事團隊資料
const getBoardMemberList = async () => {
    let { data: response, pending } = await SSRrequest.get(`board-member`, {})

    // 直接更新 originalList 的值
    if (response.value?.data) {
        Object.assign(originalList, response.value.data)
        console.log("原始名單: ",originalList)
    }

}

//立即執行獲取資料
await getBoardMemberList()

//初始化名單,原始名單的前三位,slice 會返回一個新數組
let initChronologyList = computed(() => { return originalList.slice(0, 3); })

//顯示名單,根據情況顯示前三個,或是全部
let displayedList = reactive([...initChronologyList.value])

//獲取其他List
const getOtherList = () => {
    if (!showFullList.value) {
        // 清空原数组并赋值全部数据
        displayedList.splice(0, displayedList.length, ...originalList);
        showFullList.value = true

    } else {

        // 清空原数组并赋值前五个元素
        displayedList.splice(0, displayedList.length, ...originalList.slice(0, 3));
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
        width: 100%;
        color: $main-content-color;


        /**這邊是處理通用段落、sub-title 和 內容 */
        .paragraph {
            margin-bottom: 3%;

            @media screen and (max-width:480px) {
                margin-bottom: 6%;
            }

        }

        .sub-title {
            display: inline-block;
            margin-left: 10%;
            color: #fff;
            background: $main-color;
            padding: 5px 2.5rem;
            border-radius: 16px;
            font-size: $paragraph-title-font-size;

            @media screen and (max-width:480px) {
                margin-left: 0;
            }

        }

        .content {
            margin-left: 14%;
            margin-right: 9%;
            margin-top: 2%;
            font-size: $paragraph-font-size;

            @media screen and (max-width:481px) {
                margin-left: 5%;
            }

        }


        /** 任務盒子內的樣式  */
        .mission-box {
            ol {
                list-style: none;
                /* 隱藏預設的數字標記 */
                counter-reset: item;
                /* 重置計數器 */
            }

            li {
                counter-increment: item;
                /* 每個 li 自增 1 */
                margin: 1.5rem 0;
                /* 每個項目的上下間距 */
                position: relative;
                /* 相對定位，為子元素定位 */
                // list-style: disc;
            }

            li::before {

                content: counter(item); //需要可以打開,這是自製的1,2,3,4
                /* 插入計數器的數值 */
                background: orange;
                /* 背景顏色 */
                color: white;
                /* 文字顏色 */
                border-radius: 50%;
                /* 圓形 */
                width: 2rem;
                /* 圓形寬度 */
                height: 2rem;
                /* 圓形高度 */
                display: inline-block;
                /* 使其為行內塊元素 */
                text-align: center;
                /* 文字置中 */
                line-height: 2rem;
                /* 行高等於圓形高度以置中 */
                position: absolute;
                /* 絕對定位 */
                left: -40px;
                /* 相對於 li 的位置 */
                top: 50%;
                /* 垂直置中 */
                transform: translateY(-50%);
                /* 調整位置至垂直中心 */
            }

        }

        /** 組織架構盒子內的樣式  */
        .organizational-structure-box {
            max-width: 65%;
            margin: 0 auto;
            margin-top: 3%;

            img {
                width: 100%;
            }
        }

        /** 歷屆理監事盒子內的樣式 */
        .supervisors-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin-top: 3%;

            @media screen and (max-width:850px) {
                margin-left: 5%;
            }


            .supervisors-item {
                width: 30.5%;
                flex-wrap: wrap;
                color: #fff;
                background: $main-color;
                border-radius: 16px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                margin-bottom: 2%;
                margin-right: 1%;
                padding: 0.7rem;

                @media screen and (max-width:850px) {
                    width: 44%;
                }

                @media screen and (max-width:480px) {
                    width: 80%;
                    margin: 0 auto;
                    margin-bottom: 6%;
                }


                .supervisors-session {
                    text-align: center;
                    font-size: $inner-box-title-font-size;
                }

                .supervisors-term-of-office {
                    text-align: center;
                    font-size: $inner-box-font-size;
                }

                .supervisors-info {
                    display: flex;
                    justify-content: flex-start;
                    align-items: baseline;
                    font-size: $inner-box-font-size;

                    margin: 5% 0;

                    .supervisors-info-label {
                        text-align: justify;
                        text-align-last: justify;
                        min-width: 5rem;

                    }

                    .supervisors-info-content {
                        //white-space: normal;
                        /* 允许换行 */
                        // word-break: keep-all;                       
                        white-space: normal;
                        line-break: strict;
                        word-break: keep-all;
                        hyphens: none;

                        @supports (-webkit-touch-callout: none) {
                            word-break: normal
                        }


                    }

                }
            }

        }

        /**用來觸發查看更多歷屆理監事的按鈕 */
        .supervisors-more-box {
            text-align: center;

            .supervisors-more-btn {
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


        /** 章程下載盒子 */
        .regulation-box {
            margin-bottom: 3%;

        }

    }

}
</style>
