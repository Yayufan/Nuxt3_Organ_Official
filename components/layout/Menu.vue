<template>
    <div class="menu-section">

        <el-menu class="PC-navbar" :ellipsis="false" mode="horizontal" @select="" :popper-offset="44"
            popper-class="popper">
            <!-- <el-menu-item> -->
            <el-menu-item v-if="showLogo" class="logo-box">
                <img ref="" class="logo" src="@/assets/img/logo.png" alt="logo">
            </el-menu-item>
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
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;



    .PC-navbar {
        display: flex;
        justify-content: center;
        border-bottom: none;
        width: 100vw;
        padding-top: 3%;
        padding-bottom: 3%;


        .el-sub-menu {
            :deep(.el-sub-menu__title) {
                color: $main-color;
                font-size: 1.2rem;
            }

        }

        .donate {
            color: $main-color;
            font-size: 1.2rem;
        }

        .logo-box {
            transition: opacity 0.1s ease;

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
        }

    }
}
</style>