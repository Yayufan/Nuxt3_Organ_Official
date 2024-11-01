<template>
    <div class="menu-section">

        <el-menu class="PC-navbar" :ellipsis="false" mode="horizontal" @select="" :popper-offset="-1"
            popper-class="popper">
            <!-- <el-menu-item> -->
            <el-menu-item v-if="showLogo" class="logo-box">
                <nuxt-link  :to="'/'"><img ref="" class="logo" src="@/assets/img/logo.png"
                        alt="logo"></nuxt-link>
            </el-menu-item>
            <el-sub-menu index="1">
                <template #title class="firstTitle">加入我們</template>
                <nuxt-link :to="'/purpose'"><el-menu-item @click="">宗旨任務</el-menu-item></nuxt-link>
                <nuxt-link :to="'/become-member'"><el-menu-item @click="">加入會員</el-menu-item></nuxt-link>
                <nuxt-link :to="'/association-chronology'"> <el-menu-item @click="">協會年表</el-menu-item></nuxt-link>
                <nuxt-link :to="'/achievements'"><el-menu-item @click="">歷年成果(簽卡分析)</el-menu-item></nuxt-link>
                <nuxt-link
                    :to="'https://www.facebook.com/organassociation/'"><el-menu-item>臉書粉絲團</el-menu-item></nuxt-link>
            </el-sub-menu>

            <!-- </el-menu-item> -->
            <el-sub-menu index="2">
                <template #title>訊息看板</template>
                <nuxt-link :to="'/news'"><el-menu-item>最新消息</el-menu-item></nuxt-link>
                <nuxt-link :to="'/event-highlights'"><el-menu-item>活動花絮</el-menu-item></nuxt-link>
                <nuxt-link :to="'/cooperation'"><el-menu-item>合作申請單</el-menu-item></nuxt-link>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>認識器捐</template>
                <nuxt-link to="/organ-donation"><el-menu-item>器捐學堂</el-menu-item></nuxt-link>
                <nuxt-link to="/journa"><el-menu-item>器捐捐贈會刊</el-menu-item></nuxt-link>
                <nuxt-link to="/story-donor-family"><el-menu-item>器捐生命故事:捐贈者家屬篇</el-menu-item></nuxt-link>
                <nuxt-link to="/story-recipient"><el-menu-item>器捐生命故事:受捐者篇</el-menu-item></nuxt-link>
                <nuxt-link to="/video-area"><el-menu-item>影音專區</el-menu-item></nuxt-link>
                <nuxt-link to="/brochure-download"><el-menu-item>文宣下載</el-menu-item></nuxt-link>
                <nuxt-link to="/laws"><el-menu-item>法令規章</el-menu-item></nuxt-link>
                <nuxt-link to="/doctor-voice"><el-menu-item>白袍心聲</el-menu-item></nuxt-link>
                
            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>家屬關懷</template>
                <nuxt-link :to="'/assistance-resources'"><el-menu-item>協助資源</el-menu-item></nuxt-link>
                <nuxt-link :to="'/book-recommendations'"><el-menu-item>好書推薦</el-menu-item></nuxt-link>
                <nuxt-link><el-menu-item>家屬資料填寫</el-menu-item></nuxt-link>
                <nuxt-link :to="'/social-work-column'"><el-menu-item>社工專欄</el-menu-item></nuxt-link>
                <nuxt-link :to="'/miss-me'"><el-menu-item>如果你要懷念我</el-menu-item></nuxt-link>
            </el-sub-menu>
            <el-menu-item class="donate">捐贈贊助</el-menu-item>
            <el-sub-menu index="5">
                <template #title>簽署器捐</template>
                <el-menu-item>線上簽屬</el-menu-item>
                <el-menu-item>簽卡停看聽</el-menu-item>
                <el-menu-item>撤銷簽屬</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>

const showLogo = ref(false);

const scrollPosition = useScrollPosition();
watch(scrollPosition, (newValue) => {
    showLogo.value = newValue > 130;
});

</script>

<style lang="scss" scoped>
.menu-section {
    background-color: #FFFFFF;
    min-width: 100%;
    box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;

    .PC-navbar {
        border-bottom: none;
        margin-top: 20px ;
        padding: 0 ;
        margin-top: 20px;
        padding: 0;

        .el-sub-menu {
            :deep(.el-sub-menu__title) {
                color: $main-color;
                font-size: 1.4rem;
                padding-left: 0;
                padding-right: 37px;
                border-bottom: none;
                margin-right: 3rem;

                @media screen and (max-width: 1100px) {
                    font-size: 1.2rem;
                    margin-right: 0;

                }
            }

            :deep(.el-icon) {
                top: 10%;
                min-height: 100%;
                font-size: 1rem;
                padding: 0;
                align-self: center;

            }

        }

        .donate {
            color: $main-color;
            font-size: 1.4rem;
            padding: 0 27px 0 0;
            margin-right: 3rem;

            @media screen and (max-width: 1100px) {
                font-size: 1.2rem;
                margin-right: 0;
            }

        }

        .logo-box {
            transition: opacity 0.1s ease;
            margin-right: 0;

            .logo {
                width: 13rem;
            }
        }


    }
}

.popper {
    .el-menu {
        .el-menu-item:not(:first-child) {
            border-top: 1px solid #E0E0E0;
        }

        .el-menu-item {
            font-size: 1rem;
            color: black;
            background-color: #FFFFFF;

            &:hover {
                background-color: #FFFFFF;
                color: $main-color;
            }
        }

    }
}
</style>