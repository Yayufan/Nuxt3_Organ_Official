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
    </header>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.logo-and-search-section {
    background-color: #FFFFFF;
    padding-top: 2vw;
    display: flex;

    .logo-box {
        flex-grow: 4;
        margin-left: 40vw;

        .logo {
            width: 20vw;
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
        margin-top: 3.8rem;
        padding-bottom:3.8rem;
        padding-left: 2rem;

        .contact {
            color: $main-color;
            font-size: 1rem;
        }
    }
}

</style>    