<template>
    <header class="PC-menu-box">
        <div class="logo-and-search-section">
            <div class="logo-box">
                <img ref="" class="logo" src="@/assets/img/logo.png" alt="logo"></img>
            </div>
            <div class="input-section">
                <el-input class="input" :suffix-icon="Search"></el-input>
            </div>
            <div class="contact-section">
                <nuxt-link class="contact" :to="'/'">聯絡我們</nuxt-link>
            </div>
        </div>
        <div class="menu-section">
            <el-menu class="PC-navbar" :ellipsis="false" mode="horizontal" @select="" :popper-offset="-5"
                popper-class="popper">
                <!-- <el-menu-item> -->
                <el-sub-menu index="1">
                    <template #title>加入我們</template>
                    <el-menu-item index="/education" @click="">宗旨任務</el-menu-item>
                    <el-menu-item index="/medical-knowledge" @click="">加入會員</el-menu-item>
                    <el-menu-item index="/medical-knowledge" @click="">協會年表</el-menu-item>
                    <el-menu-item index="/medical-knowledge" @click="">歷年成果(簽卡分析)</el-menu-item>
                    <el-menu-item index="/medical-knowledge" @click="">臉書粉絲團</el-menu-item>
                </el-sub-menu>

                <!-- </el-menu-item> -->
                <el-sub-menu index="2">
                    <template #title>訊息看板</template>
                    <el-menu-item>最新消息</el-menu-item>
                    <el-menu-item>活動花絮</el-menu-item>
                    <el-menu-item>合作申請單</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>認識器捐</template>
                    <el-menu-item>器捐學堂</el-menu-item>
                    <el-menu-item>器捐捐贈會刊</el-menu-item>
                    <el-menu-item>器捐生命故事:捐贈者家屬篇</el-menu-item>
                    <el-menu-item>器捐生命故事:受捐者篇</el-menu-item>
                    <el-menu-item>影音專區</el-menu-item>
                    <el-menu-item>文宣下載</el-menu-item>
                    <el-menu-item>法令規章</el-menu-item>
                    <el-menu-item>白袍心聲</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="4">
                    <template #title>家屬關懷</template>
                    <el-menu-item>人間有愛</el-menu-item>
                    <el-menu-item>生命再現</el-menu-item>
                    <el-menu-item>協助資源</el-menu-item>
                    <el-menu-item>好書推薦</el-menu-item>
                    <el-menu-item>家屬資料填寫</el-menu-item>
                    <el-menu-item>社工專欄</el-menu-item>
                    <el-menu-item>如果你要懷念我</el-menu-item>
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
    </header>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.logo-and-search-section {
    background-color: #FFFFFF;
    padding: 2vw 0 2vw 0;
    display: flex;

    .logo-box {
        flex-grow: 4;
        margin-left: 40vw;

        .logo {
            width: 20vw;
            height: 6rem;
        }
    }

    .input-section {
        padding-top: 3.5rem;
        flex-grow: 1;

        :deep(.el-input__wrapper) {
            background-color: $main-color;
            height: 1.5rem;
            width: 10rem;
            border-radius: 30px;
        }

        :deep(.el-input__suffix) {
            background-color: #FFFFFF;
            color: $main-color;
            padding-right: 1rem;
            height: 1rem;
            width: 0.8rem;
            border-radius: 10px;
        }
    }

    .contact-section {
        flex-grow: 1;
        // border: 1px solid #458537;
        margin-top: 3.8rem;
        padding: 0 0 3.8rem 2rem;

        .contact {
            color: $main-color;
            font-size: 1rem;
        }
    }
}

.PC-navbar {
    margin-left: 25vw;

    .el-sub-menu {
        :deep(.el-sub-menu__title) {
            color: $main-color;
            font-size: 1.5rem;
        }

    }

    .donate {
        color: $main-color;
        font-size: 1.5rem;
    }
}

.popper {
    .el-menu {
        .el-menu-item:not(:first-child) {
            border-top: 1px solid #E0E0E0;
        }

        .el-menu-item {
            font-size: 1rem;
        }

    }
}
</style>