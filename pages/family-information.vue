<!--  -->
<template>

    <div>

        <Breadcrumbs firstRoute="家屬關懷" secoundRoute="家屬資料填寫"></Breadcrumbs>

        <section class="common-section">

            <h1 class="common-title">家屬資料填寫</h1>

            <div class="content-box">

                <article class="paragraph">

                    <p>本會每年為捐贈者家屬舉辦各類型關懷活動與諮詢協談</p>

                    <p>誠摯邀請家屬們參與</p>

                    <p>請將您的想法和需求告訴我們</p>

                    <p>將由本會社工員與您聯繫</p>

                    <p>家屬資料<nuxt-link class="google-form" target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLScxrl0on7gvcaTYTI9knEgy0-dwGHhT7SeJfS183B8g811QHQ/viewform" >填寫</nuxt-link></p>

                </article>


            </div>

        </section>

    </div>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

</script>

<style scoped lang="scss">
.common-section {
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

        &::before {
            display: inline;
            content: "";
            border-left: 3px solid $main-color;
            padding-right: 10px;
        }

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

    }

    .content-box {
        margin-left: 10%;

        @media screen and (max-width:481px) {
            margin-left: 0;
        }

        .paragraph {
            margin: 3% 0;
            line-height: 2;
            font-size: 1.2rem;

            p{
                
            }

            .google-form{
                text-decoration: underline;
                font-weight: 700;
                color: $main-color;
                font-size: 1.4rem;
                transition: 0.5s;

                &:hover{
                    font-size: 1.45rem;
                }
            }

        }

    }
}
</style>
