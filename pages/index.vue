<template>
    <main class="main">
        <div class="carousel-box">
            <el-carousel class="carousel" arrow="always" indicator-position="outside">
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
        </div>
        <div class="message-board">
            <div class="title">
                <p>訊息看板</p>
            </div>
            <div class="link-box">
                <div class="link-item">
                    <nuxt-link :class="{ active: activeLink === 'news' }" ref="news" @click="handleClick('news')">最新消息
                    </nuxt-link>
                </div>
                <div class="link-item">
                    <nuxt-link :class="{ active: activeLink === 'eventHighlight' }" ref="eventHighlight"
                        @click="handleClick('eventHighlight')">活動花絮</nuxt-link>
                </div>
                <div class="link-item">
                    <nuxt-link :class="{ active: activeLink === 'form' }" ref="collaborationApplicationForm"
                        @click="handleClick('form')">合作申請單</nuxt-link>
                </div>
            </div>
            <div class="article">
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



const news = ref();
const eventHighlight = ref();
const collaborationApplicationForm = ref();

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
            description: '怡馨調心成長工作坊-中區',
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

    .carousel-box {
        width: 100%;
        height: 400px;

        .carousel {
            width: 100%;
            // min-height: 100%;
            height: 400px;
            
            .el-carousel__container {
                height: 400px;
                // height: 100%;
                .el-carousel__item {
                    height: 400px;
                width: 100%;
                // height: 100%;
                img {
                    width: 100%;
                    height: 400px;
                }

            }
            }



            :deep(.el-carousel__arrow) {
                background-color: #EE7C84;
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

    }

    .message-board {
        max-width: 100vw;
        margin-top: 50px;
        background-color: #E9B2B1;
        align-items: center;
        border-radius: 50px;
        padding: 20px 0;

        .title {
            width: 50%;
            margin-left: 10%;
            color: white;
            font-size: 2.5rem;
            padding: 10px 0 20px 0;
        }

        .link-box {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 10px 0;
            background-color: #F4D4BE;

            .link-item {
                padding: 10px 0;
                margin: 0 10%;

                a {
                    color: #8F1D22;
                    font-size: 1.5rem;
                    cursor: pointer;

                }

                .active {
                    border-radius: 20px;
                    padding: 0.5rem;
                    letter-spacing: 0.1rem;
                    color: white;
                    background-color: #8F1D22;
                }
            }
        }

        .article {
            width: 100%;
            background-color: #E9B2B1;
            border-radius: 0 0 20px 20px;
            display: flex;
            justify-content:center;
            margin-top: 30px;

            .article-item {
                max-width: 100%;
                margin: 0 0.4%;
                .article-img {
                    width: 17vw;
                    height: 17vw;
                    background-color: white;
                    border-radius: 20px;
                    // margin: 0 5% 0 5%;
                    
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: top center;
                        border-radius: 20px;
                    }

                }

                p {
                    text-align: center;
                    color: #8F1D22;
                }

                margin-bottom: 3%;

            }

            .el-button {
                display: flex;
                // align-self:;
                margin: 7% auto;
                width: 3rem;
                height: 3rem;
                font-size: 2rem;
                color: white;
                background-color: #C4D5D2;
                border: none;
                border-radius: 50%;
            }
        }

        .page-box {
            margin-top: 1%;
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
        // display: flex;
        margin-top: 5%;
        
        .title{
            margin-left: 10%;
            color: #E99B67;
            font-size: 2.5rem;
        }
        .icon-link-box {
            display: flex;
            margin:3% 0 0 10%;

            .link-item {
                margin: 0 8% 2% 0;
                p {
                    color: #91715F;
                    font-size: 1rem;
                    text-align: center;
                }
            }

            img {
                width: 100%;
            }

        }
    }
}
</style>