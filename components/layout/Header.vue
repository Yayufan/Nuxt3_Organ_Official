<template>
    <header class="PC-menu-box">
            <div class="logo-box">
                <nuxt-link :to="'/'"><img ref="" class="logo" src="@/assets/img/logo.png" alt="logo"></img></nuxt-link>
            </div>
            <div class="input-section">
                <el-input class="input" v-model="search" :suffix-icon="Search"></el-input>
                <nuxt-link class="contact" :to="'/'">聯絡我們</nuxt-link>
            </div>
    </header>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'

const search = ref('')
</script>
<style lang="scss" scoped>

.PC-menu-box {
    width: 100vw;
    display: flex;
    justify-content: center;
    .logo-box {
        margin-left: 40vw;
        width: 20vw;
        img {
            width: 100%;
        }
    }

    .input-section {
        width: 25vw;
        display: flex;
        align-items: end;
        margin-left: 14vw;
        padding-bottom: 0.5rem;
        .el-input {
            width: 16vw;
        }
        :deep(.el-input__wrapper) {
            background-color: $main-color;
            max-height: 1.8rem;
            border-radius: 30px;
        }
        :deep(.el-input__suffix) {
            background-color: #FFFFFF;
            color: $main-color;
            padding-right: 1.2rem;
            max-height: 1rem;
            width: 0.4rem;
            border-radius: 10px;
            cursor: pointer;
            .el-icon {
                font-size: 0.6rem;
            }
        }
        .contact {
            color: $main-color;
            font-size: 1rem;
            margin-left: 1vw;
            padding-bottom: 0.1vw;
        }
    }
}

</style>    