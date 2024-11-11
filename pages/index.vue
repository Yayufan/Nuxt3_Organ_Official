<template>
    <main class="main">
        <el-carousel arrow="always" indicator-position="outside">
            <el-carousel-item>
                <img src="@/assets/img/carousel-item3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/carousel-item2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/img/carousel-item1.jpg" alt="">
            </el-carousel-item>
        </el-carousel>

        <div class="message-board-box">
            <div class="title">訊息看板</div>
            <div class="header-button-section">
                <el-button :class="{ active: activeLink === 'news' }" @click="handleClick('news')">最新消息</el-button>
                <el-button :class="{ active: activeLink === 'eventHighlight' }"
                    @click="handleClick('eventHighlight')">活動花絮</el-button>
                <el-button :class="{ active: activeLink === 'form' }" @click="handleClick('form')">合作申請單</el-button>
            </div>
            <div class="article-box">
                <el-button><el-icon>
                        <ElIconArrowLeft />
                    </el-icon></el-button>
                <div class="article-item" v-for="item in articleList.recoards">
                    <div class="article-img">
                        <nuxt-link to="/"><img :src="item.imgUrl" alt=""></nuxt-link>
                    </div>
                    <p>{{ item.date }}</p>
                    <p>{{ item.description }}</p>
                </div>
                <el-button><el-icon>
                        <ElIconArrowRight />
                    </el-icon></el-button>
            </div>
            <div class="mobile-header-button-section">
                <el-button class="active" @click="handleClick('eventHighlight')">活動花絮</el-button>
            </div>
            <div class="mobile-article-box">
                <div class="article-item" v-for="item in articleList.recoards">
                    <div class="article-img">
                        <nuxt-link to="/"><img :src="item.imgUrl" alt=""></nuxt-link>
                    </div>
                    <p>{{ item.date }}</p>
                    <p>{{ item.description }}</p>
                </div>
            </div>
            <div class="page-box">
                <el-pagination size="small" layout="prev, pager, next" :page-count="Number(articleList.pages)"
                    :page-size="5" v-model:current-page="currentPage" :hide-on-single-page="true" />
            </div>
        </div>
        <div class="join-us-board">
            <p class="title">加入我們</p>
            <div class="icon-link-box">
                <div class="link-item">
                    <nuxt-link to="/purpose">
                        <img src="@/assets/img/purpose-icon.png" alt="">
                    </nuxt-link>
                    <p>宗旨任務</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/become-member">
                        <img src="@/assets/img/become-member-icon.png" alt="">
                    </nuxt-link>
                    <p>加入會員</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/association-chronology">
                        <img src="@/assets/img/association-chronology-icon.png" alt="">
                    </nuxt-link>
                    <p>協會年表</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="/achievements">
                        <img src="@/assets/img/achievements-icon.png" alt="">
                    </nuxt-link>
                    <p>歷年成果</p>
                    <p>(簽卡分析)</p>
                </div>
                <div class="link-item">
                    <nuxt-link to="https://www.facebook.com/organassociation/">
                        <img src="@/assets/img/facebook-icon.png" alt="">
                    </nuxt-link>
                    <p>粉絲團臉書</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang='ts'>

const viewWidth = ref(0);
onMounted(() => {
    updateViewWidth();
    window.addEventListener('resize', updateViewWidth);
})

const updateViewWidth = () => {
    viewWidth.value = document.documentElement.clientWidth;
    if (viewWidth.value < 850) {
        articleList.size = 3;
        articleList.recoards = articleList.recoards.slice(0, 3);
    } else {
        articleList.size = 5;
    }
}


onUnmounted(() => {
    window.removeEventListener('resize', updateViewWidth);
})




const activeLink = ref('news');

const handleClick = (link: string) => {
    activeLink.value = link;
}

const currentPage = ref(1)

let articleList = reactive({
    pages: 2,
    size: 5,
    recoards: [
        {
            date: '2024.10.21',
            description: '怡馨調心成長工作坊-中區',
            imgUrl: 'https://assets.monica.im/tools-web/_next/static/media/imageGeneratorFeatureIntro1.9f5e7e23.webp',
        },
        {
            date: '2024.10.21',
            description: '怡馨調心成長工作坊-中區',
            imgUrl: 'https://assets.monica.im/tools-web/_next/static/media/imageGeneratorFeatureIntro1.9f5e7e23.webp',
        },
        {
            date: '2024.10.21',
            description: '怡馨調心成長工作坊-中區',
            imgUrl: 'https://assets.monica.im/tools-web/_next/static/media/imageGeneratorFeatureIntro1.9f5e7e23.webp',
        },
        {
            date: '2024.10.21',
            description: '怡馨調心成長工作坊-中區怡馨調心成長工作坊-中區怡馨調心成長工作坊-中區',
            imgUrl: 'https://assets.monica.im/tools-web/_next/static/media/imageGeneratorFeatureIntro1.9f5e7e23.webp',
        },
        {
            date: '2024.10.21',
            description: '怡馨調心成長工作坊-中區',
            imgUrl: 'https://assets.monica.im/tools-web/_next/static/media/imageGeneratorFeatureIntro1.9f5e7e23.webp',
        },
    ]
})



</script>
<style lang="scss" scoped>
.main {
    width: 100%;

    @media screen and (max-width: 850px) {
        margin-top: 0.4vw;
    }

    @media screen and (max-width: 850px) {
        margin-top: 0.4vw;
    }

    .el-carousel {
        height: 400px;
        max-width: 100%;

        @media screen and (max-width: 850px) {
            height: 200px;
        }

        img {
            width: 100%;
            height: 100%;
        }

        :deep(.el-carousel__container) {
            height: 80%;
        }

        :deep(.el-carousel__arrow) {
            background-color: #EE7C84;
            // margin-bottom: 3%;
            top: 40%;
        }

        :deep(.el-carousel__arrow--left) {
            margin-left: 3%;
        }

        :deep(.el-carousel__arrow--right) {
            margin-right: 3%;
        }

        :deep(.el-icon),
        :deep(.el-icon svg) {
            width: 2rem;
            height: 2rem;
        }

        :deep(.el-carousel__button) {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
        }
    }

    // 訊息看板
    .message-board-box {
        width: 100%;
        background-color: #E9B2B1;
        border-radius: 35px;

        // 標題
        .title {
            display: inline-block;
            font-size: 2rem;
            color: #FFFFFF;
            margin-left: 10%;
            padding: 15px 0;

            @media screen and (max-width: 850px) {
                margin-left: 3.5%;
                text-align: center;
            }
        }

        // 按鈕
        .header-button-section,
        .mobile-header-button-section {
            background-color: #F4D4BE;
            display: flex;
            justify-content: space-around;
            padding: 10px 0;

            @media screen and (max-width: 850px) {
                justify-content: flex-start;
                padding-left: 10%;
            }

            .el-button {
                border-radius: 40px;
                color: #8F1D22;
                font-size: 1rem;
                background-color: #F4D4BE;

                // 點擊時的邊框顏色
                &:active {
                    border-color: #F4D4BE;
                }

                // &.el-button:first-child {
                //     background-color: #8F1D22;
                //     color: white;
                // }

                &.el-button:not(:first-child) {
                    @media screen and (max-width: 850px) {
                        display: none;
                    }
                }
            }

            // 被選中的按鈕
            .active {
                background-color: #8F1D22;
                color: white;
            }
        }




        .article-box,
        .mobile-article-box {
            display: flex;
            justify-content: center;
            padding-bottom: 2rem;

            .el-button {

                // 行動裝置下隱藏
                @media screen and (max-width: 850px) {
                    display: none;
                }

                background-color: #C4D5D2;
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 2rem;
                height: 2rem;
                width: 2rem;
                margin: 8% 0;

                &.el-button:first-child {
                    margin-right: 10px;
                }

                &.el-button:last-child {
                    margin-left: 10px;
                }
            }

            .article-item {
                max-width: 17vw;
                margin: 1vw 5px;

                @media screen and (max-width: 850px) {
                    max-width: 30vw;
                }

                .article-img {
                    width: 100%;
                    height: 17vw;

                    @media screen and (max-width: 850px) {
                        height: 30vw;
                    }
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top center;
                    border-radius: 20px;
                }

                p {
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #8F1D22;
                }
            }

        }

        .mobile-header-button-section,
        .mobile-article-box {
            margin-bottom: 2vw;

            @media screen and (min-width: 850px) {
                display: none;
            }
        }

        .page-box {
            @media screen and (max-width: 850px) {
                display: none;
            }

            margin: 2% 0;
            padding-bottom: 1rem;
            display: flex;
            justify-content: center;

            :deep(.btn-prev) {
                // background-color: #E9B2B1;
                // color: white;
                display: none;
            }

            :deep(.btn-next) {
                // background-color: #E9B2B1;
                // color: white;
                display: none;

            }

            :deep(.number),
            :deep(.btn-quickprev),
            :deep(.btn-quicknext) {
                background-color: #E9B2B1;
                color: white;
            }
        }
    }

    .join-us-board {
        width: 100%;
        margin-top: 5%;
        justify-content: center;


        .title {
            margin-left: 10%;
            color: #E99B67;
            font-size: 2rem;

            @media screen and (max-width: 850px) {
                margin-left: 3.5%;
            }
        }

        .icon-link-box {
            display: flex;
            margin: 3% 0 0 10%;

            @media screen and (max-width: 850px) {
                max-width: 85%;
                margin-left: 5%;
                justify-content: center;
                flex-wrap: wrap;
            }

            .link-item {
                @media screen and (max-width: 850px) {
                    width: 28%;
                    margin: 0 5px 2% 5px;
                }

                margin: 0 8% 2% 0;

                // width: 100%;
                p {
                    color: #91715F;
                    font-size: 1rem;
                    text-align: center;
                }
            }

            img {
                width: 100%;

                &:hover {
                    transform: scale(1.1);
                }
            }

        }
    }
}
</style>