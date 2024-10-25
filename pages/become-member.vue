<!--  -->
<template>

    <section class="common-seciton">

        <h1 class="common-title">加入會員</h1>

        <div class="content-box">

            <article class="paragraph">
                <h2 class="sub-title">會員類別</h2>
                <div class="individual-member-box">
                    <div clsss="common-label">個人會員</div>
                    <p>凡贊同本會宗旨，年滿二十歲，填具入會申請書</p>
                </div>
                <div class="group-member-box"></div>


            </article>

        </div>

    </section>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'

</script>

<style scoped lang="scss">
.common-seciton {
    width: $common-section-width;
    margin: $common-section-margin;
    font-family: $common-section-font-family;

    .common-title {
        color: $main-color;
        font-weight: $common-title-font-weight;
        font-size: $common-title-font-size;
        letter-spacing: $common-title-letter-spacing;
        margin-left: 10%;
        margin-bottom: 3%;

    }

    .content-box {
        background-color: aqua;
        width: 100%;

        /**這邊是處理通用段落、sub-title 和 內容 */
        .paragraph {
            margin-bottom: 3%;
        }

    }

}
</style>
