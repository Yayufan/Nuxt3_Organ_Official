<template>
    <div class="breadcrumbs">
        <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.firstRoute }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.secoundRoute }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script lang="ts" setup>
    import { ArrowRight } from '@element-plus/icons-vue'

    const props = defineProps<{
        firstRoute: string,
        secoundRoute: string
    }>();


</script>
<style lang="scss" scoped>
.breadcrumbs {
    padding: 20px 0;
    width: 100vw;
    background-color: #EAEAE9;
    display: flex;
    justify-content: center;

    .breadcrumb {
        width: 55%;
        display: flex;
        line-height: 100%;
        font-size: 1rem;
        font-weight: normal;
        letter-spacing: 0.1rem;
        color: $main-content-color;
        justify-content: flex-start;
    }
}
</style>