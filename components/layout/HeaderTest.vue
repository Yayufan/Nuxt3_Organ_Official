<template>
    <header class="PC-menu-box">
        <div class="logo-box">
            <img ref="" class="logo" src="@/assets/img/logo.png" alt="logo"></img>
        </div>        
        <div class="input-section">
            <el-input class="input" :suffix-icon="Search"></el-input>
        </div>
        <div class="contact-section">
            <p class="contact">聯絡我們</p>
        </div>
    </header>
</template>
<script lang="ts" setup>
 import {Search} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
    .PC-menu-box {
        background-color: #FFFFFF;
        display: flex;

        .logo-box {
            margin-left: 40vw;
            .logo {
                width: 18rem;
                height: 70px;
            }
        }

        .input-section {
            padding-top: 2rem;
            margin-left: 10vw;
            :deep(.el-input__wrapper) {
                    background-color: #458537;
                    height: 1.5rem;
                    width: 10rem;
                    border-radius: 30px;
            }
            :deep(.el-input__suffix) {
                background-color: #FFFFFF;
                color: #458537;
                padding-right: 1rem;
                height: 1rem;
                width: 0.8rem;
                border-radius: 10px;
            }
        }
        .contact-section {
            .contact {
                color: #458537;
                font-size: 1rem;
                padding: 2.2rem;
            }
        }
    }

</style>