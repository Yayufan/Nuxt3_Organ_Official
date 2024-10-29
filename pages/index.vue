<template>
    <main class="main">
        <div class="carousel-box">
            <el-carousel class="carousel" arrow="always">
                <el-carousel-item v-for="item in 5" :key="item">
                    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
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
                <div class="article-item" v-for="item in 5">
                    <div class="article-img">
                        <NuxtLink><img src="@/assets/img/HsuImg.jpg" alt=""></NuxtLink>
                    </div>
                    <p>2024.10.21</p>
                    <p>怡馨調心成長工作坊-中區</p>
                </div>
                <el-button><el-icon>
                        <ElIconArrowRight />
                    </el-icon></el-button>
            </div>
            <div class="page-box">
                <el-pagination size="small" layout="prev, pager, next" :total="50" />
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

</script>
<style lang="scss" scoped>
.main {
    width: 100%;

    .carousel-box {
        width: 100%;

        .carousel {
            width: 100%;

            .el-carousel__item {
                // 圖片置中
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: green;
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

            :deep(.el-icon), :deep(.el-icon svg) {
                width: 2rem;
                height: 2rem;
            }

            :deep(.el-carousel__button) {
                width: 2px;
                border-radius: 50%;
            }
        }

    }

    .message-board {
        max-width: 100vw;
        margin-top: 50px;
        background-color: #E9B2B1;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 50px;
        padding: 20px 0;

        .title {
            width: 50%;
            color: white;
            margin-right: 10%;
            font-size: 1.3rem;
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
                    font-size: 1rem;
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
            justify-content: center;

            .article-item {

                .article-img {
                    width: 12vw;
                    height: 12vw;
                    background-color: white;
                    border-radius: 20px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 20px;
                    }

                }

                p {
                    text-align: center;
                    color: #8F1D22;
                }

                margin: 1% 3% 0 3%;

            }

            .el-button {
                display: flex;
                align-self: center;
                width: 2rem;
                background-color: #C4D5D2;
                border: none;
                border-radius: 50%;
            }
        }

        .page-box {
            margin-top: 1%;
            display: flex;
            align-items: baseline;

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

            :deep(.number) {
                background-color: #E9B2B1;
                color: white;
            }
        }
    }
}
</style>