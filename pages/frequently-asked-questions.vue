<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="簽署器捐" secoundRoute="簽卡停看聽"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">簽卡停看聽</h1>

            <div class="schematic-diagram-box">
                <div class="schematic-item  " @click="scrollToSection('article01')">
                    <img src="@/assets/img/FAQ01.png">
                </div>
                <div class="schematic-item " @click="scrollToSection('article02')">
                    <img src="@/assets/img/FAQ02.png">
                </div>
                <div class="schematic-item  " @click="scrollToSection('article03')">
                    <img src="@/assets/img/FAQ03.png">
                </div>
                <div class="schematic-item " @click="scrollToSection('article04')">
                    <img src="@/assets/img/FAQ04.png">
                </div>
                <div class="schematic-item " @click="scrollToSection('article05')">
                    <img src="@/assets/img/FAQ05.png">
                </div>
            </div>

            <div class="content-box">

                <article class="paragraph" ref="article01">
                    <h2 class="sub-title ">
                        <img src="@/assets/img/FAQ01.png">
                        <hr class="green-hr">
                    </h2>
                    <div class="QA-box">

                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon green-text "></div>
                                <div class="QA-info">註記在健保IC卡是什麼？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon green-text"></div>
                                <div class="QA-info">
                                    就是指將「器官捐贈意願」登錄在健保IC卡上，此為「具法律效力之同意」（依據「人體器官移植條例」第六條），與私下意願的表達全然不同。器官捐贈協會於民國93年5月，開始推動個人器官捐贈意願登錄於健保IC卡活動，所以無論您是較早的簽卡人或是新的認同者，只要您願意登錄，請於線上填寫完成後，列印寄回同意書，我們會將資料送交衛生福利部登錄。
                                </div>
                            </div>
                        </div>

                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon green-text "></div>
                                <div class="QA-info">為什麼要將器官捐贈意願登錄於健保IC卡？有什麼作用？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon green-text"></div>
                                <div class="QA-info">
                                    健保IC卡早已是民眾隨身攜帶的重要證件，能向醫護人員立即表達遺愛人間的心願，拉近醫護人員與家屬間距離，縮短醫護人員與家屬的溝通，有助於器官勸募工作進行，家屬因此接受器官捐贈的可能性就相對提升。
                                </div>
                            </div>
                        </div>

                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon green-text "></div>
                                <div class="QA-info">我要如何知道我的器官捐贈意願已經註記在健保IC卡了呢？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon green-text"></div>
                                <div class="QA-info">
                                    手機下載健保快易通APP，即可登入查詢，查詢方式詳見本會器捐學堂自行查詢健保卡註記狀態說明；
                                    攜帶健保IC卡到健保署、醫療院所健保IC卡讀卡機查詢，
                                    或至衛生福利部安寧緩和醫療及器官捐贈意願資訊系統以自然人憑證查詢
                                    https://hpcod.mohw.gov.tw/HospWeb/MOPages/login.aspx，或於政府機關辦公時間撥電話查詢，
                                    電話02-2358-2186。
                                </div>
                            </div>
                        </div>
                    </div>


                </article>

                <article class="paragraph" ref="article02">
                    <h2 class=" sub-title">
                        <img src="@/assets/img/FAQ02.png">
                        <hr class="yellow-hr">
                    </h2>

                    <div class="QA-box">

                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon yellow-text "></div>
                                <div class="QA-info">我的器官捐贈同意卡遺失了該怎麼辦？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon yellow-text"></div>
                                <div class="QA-info">
                                    推動器官捐贈意願登錄於健保IC卡活動之後，器官捐贈同意卡已退為認同卡的角色，可以不必領取。如果仍想隨身攜帶器捐卡，可以透過本會網站【聯絡我們】申請補發。請填寫清楚個人資料，包括：姓名、身分證號、通訊地址、聯絡電話，註明「舊卡遺失，補發新卡」等相關字樣。查對資料後，會立即補發新卡。
                                </div>
                            </div>
                        </div>

                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon yellow-text "></div>
                                <div class="QA-info">很久以前的器捐卡還有用嗎？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon yellow-text"></div>
                                <div class="QA-info">
                                    許多簽卡的朋友們都很擔心自己很久以前的簽卡，會不會因為時間的累積而失去了它的效力？關於這一點請您放心，只要器官捐贈同意卡還在，只要您仍有這份認同器官捐贈的心意，不管是多久前的簽卡，效力依舊唷！另外，尚未登錄器官捐贈意願於健保卡IC卡的朋友們，本會也十分鼓勵朋友們來更新您的個人基本資料，補填器官捐贈同意書，就可以辦理健保IC卡器捐意願登錄了。
                                </div>
                            </div>
                        </div>

                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon yellow-text "></div>
                                <div class="QA-info">改名字要重新換一張器捐卡嗎？這樣會有影響嗎？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon yellow-text"></div>
                                <div class="QA-info">
                                    更改姓名不必更換器捐卡哦！畢竟我們的身份證字號是不會變動的，當然也不會有影響。
                                </div>
                            </div>
                        </div>
                    </div>

                </article>

                <article class="paragraph" ref="article03">
                    <h2 class="sub-title">
                        <img src="@/assets/img/FAQ03.png">
                        <hr class="red-hr">
                    </h2>
                    <div class="QA-box">
                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon red-text "></div>
                                <div class="QA-info">什麼情況須要填寫法定代理人欄？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon red-text"></div>
                                <div class="QA-info">
                                    只要年滿20歲，法定代理人欄位就不必填寫了。未滿20歲則必須有法定代理人（如父母、監護人）協同簽署。
                                </div>
                            </div>
                        </div>
                    </div>

                </article>

                <article class="paragraph " ref="article04">
                    <h2 class="sub-title">
                        <img src="@/assets/img/FAQ04.png">
                        <hr class="blue-hr">
                    </h2>
                    <div class="QA-box">
                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon blue-text "></div>
                                <div class="QA-info">哪裡可以簽署器官捐贈？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon blue-text"></div>
                                <div class="QA-info">
                                    除了在本會網站線上簽署及下載列印器官捐贈同意書，其他簽署管道還有器官捐贈移植登錄中心網站，以及健保署、各大醫院等。或請致電本會02-27025150、0800-091-066，我們會以傳真、電郵或郵寄方式提供簽署同意書給您。
                                    <br>
                                    器官捐贈同意書簽署後，必須有本人簽名並且將正本書面掛號寄回器官捐贈協會，後續才會依此資料為您申辦登錄器捐意願於健保卡。
                                </div>
                            </div>
                        </div>
                    </div>

                </article>

                <article class="paragraph" ref="article05">
                    <h2 class=" sub-title">
                        <img src="@/assets/img/FAQ05.png">
                        <hr class="brown-hr">
                    </h2>
                    <div class="QA-box">
                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon brown-text "></div>
                                <div class="QA-info">B型肝炎帶原者能作器官捐贈嗎？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon brown-text"></div>
                                <div class="QA-info">
                                    依現行分配原則而言，B型肝炎帶原者仍然可以捐贈器官給同為B型肝炎表面抗原陽性的等待器官移植患者；C型肝炎也一樣哦！更詳細的分配原則，有興趣的朋友可以參考人體器官移植條例作更深入的了解。
                                </div>
                            </div>
                        </div>

                        <div class="QA-item">
                            <div class="question-box">
                                <div class="QA-icon brown-text "></div>
                                <div class="QA-info">簽卡前需要身體健康檢查嗎？</div>
                            </div>
                            <div class="answer-box">
                                <div class="QA-icon brown-text"></div>
                                <div class="QA-info">
                                    其實並不需要特地為了簽署器捐同意卡而作身體健康檢查哦！簽署器官捐贈同意卡和實際捐贈，中間還有好大一段距離呢！只要我們秉持著認同「尊重生命．器官捐贈」的理念，好好經營自己的生活和健康，就是最大的福氣！
                                </div>
                            </div>
                        </div>
                    </div>

                </article>


            </div>


        </section>

    </div>

</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

const article01 = ref();
const article02 = ref();
const article03 = ref();
const article04 = ref();
const article05 = ref();

const scrollToSection = (section: any) => {
    const target = eval(section); // 根據傳入的 section 名稱獲取對應的 ref
    if (target.value) {
        const targetPosition = target.value.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetPosition - 100, // 向上調整100像素
            behavior: 'smooth'
        });
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
        margin-bottom: 2%;

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

    .schematic-diagram-box {
        margin-top: 5%;
        margin-left: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        font-size: 1.3rem;
        font-weight: 600;


        @media screen and (max-width:850px) {
            font-size: 1rem;
        }

        @media screen and (max-width:480px) {
            justify-content: center;
        }


        .schematic-item {
            color: #fff;
            width: 26%;
            text-align: center;
            position: relative;
            transition: 0.5s;
            margin-right: 3%;
            cursor: pointer;

            @media screen and (max-width:481px) {
                width: 45%;
            }

            &:hover {
                scale: 1.1;
            }

            img {
                width: 100%;
                /* 添加形状阴影 */
                filter: drop-shadow(5px 8px 7px rgba(0, 0, 0, 0.5));
            }


        }

    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .paragraph {
            margin: 3% 0;

            .sub-title {
                color: #fff;
                font-size: 1.2rem;
                display: flex;
                align-items: center;
                padding: 0.5rem 0.8rem;
                border-radius: 16px;
                position: relative;

                img {
                    width: 100%;
                    max-width: 14vw;

                    @media screen and (max-width:850px) {
                        max-width: 22vw;
                    }

                    @media screen and (max-width:481px) {
                        max-width: 30vw;
                    }

                }

                hr {
                    width: 100%;
                    margin-left: 6px;
                    height: 0;
                }





            }

            .QA-box {
                margin-left: 2rem;
                margin-top: 1rem;

                :last-child {
                    &::after {
                        content: none !important;
                    }

                }

                .QA-item {
                    position: relative;
                    margin: 1.5rem 0;

                    &::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: -0.5rem;
                        margin-left: 3rem;
                        width: calc(100% - 2.9rem - 5%);
                        border: 1px solid transparent;
                        /* 设置透明边框 */
                        border-image: repeating-linear-gradient(90deg, #A8A8A8 0, #A8A8A8 5px, transparent 5px, transparent 10px) 30;

                    }




                    .question-box,
                    .answer-box {
                        display: flex;
                        margin: 1rem 0;

                        .QA-icon {
                            margin-right: 1rem;

                            &::before {
                                display: inline-block;
                                border-radius: 50%;
                                font-size: 1.5rem;
                                text-align: center;
                                width: 1.9rem;
                                height: 1.9rem;
                                box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
                            }
                        }

                        .QA-info {
                            color: $main-content-color;
                            line-height: 2;
                            font-size: $inner-box-font-size;
                            word-break: break-all;

                            @media screen and (max-width:850px) {}

                            @media screen and (max-width:481px) {
                                margin-right: 7%;
                            }

                        }

                    }

                    .question-box .QA-icon::before {
                        content: 'Q';
                    }

                    .answer-box .QA-icon::before {
                        content: 'A';

                    }
                }
            }
        }


        .download-file-box {
            display: flex;
            flex-direction: column;
            margin-left: 2.5rem;

            .download-link {
                margin: 0.5rem;
                /** 這邊是為了將a標籤從flex block 狀態,改為inline block 狀態  */
                align-self: flex-start;
            }

        }
    }
}


//不同顏色
.green-text {
    color: #94AA8F;
}

.green-hr {
    border: 1px solid #94AA8F;
    ;
}

.yellow-text {
    color: #EEC46B;
}

.yellow-hr {
    border: 1px solid #EEC46B;
}

.red-text {
    color: #C75A73;
}

.red-hr {
    border: 1px solid #C75A73;
}


.blue-text {
    color: #196B9C;
}

.blue-hr {
    border: 1px solid #196B9C;
}


.brown-text {
    color: #995A39;
}

.brown-hr {
    border: 1px solid #995A39;
}
</style>