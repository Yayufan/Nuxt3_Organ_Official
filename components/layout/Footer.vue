<template>
    <footer class="footer-box">
        <div class="footer-info">
            <div class="footer-item">
                <div class="info-box"><p class="info-content">社團法人中華民國器官捐贈協會</p></div>
                <div class="info-box"><img class="map-icon" src="@/assets/img/MapMarkedAlt.svg" alt="">
                    <p class="info-content">地址:106台北市大安區信義路四段24號6樓</p>
                </div>
                <div class="info-box"><img class="phone-icon" src="@/assets/img/LocalPhoneRound.svg" alt="">
                    <p class="info-content">電話:02-2702-5150</p> <img class="fax-icon" src="@/assets/img/fax.svg"
                        alt="">
                    <p class="info-content">傳真:02-2702-5393</p>
                </div>
                <div class="info-box"><img class="email-icon" src="@/assets/img/EmailRound.svg" alt="">
                    <p class="info-content">聯絡信箱:office@organ.org.tw</p>
                </div>
            </div>
            <div class="footer-item">
                <div class="info-box">
                    <p class="info-content">立案字號: 台內社字第8221013號</p>
                </div>
                <div class="info-box">
                    <p class="info-content">統一編號:76947385</p>
                    <p class="info-content account">劃撥帳號:17424922</p>
                </div>
                <div class="info-box">
                    <p class="info-content">戶名:社團法人中華民國器官捐贈協會</p>
                </div>
                <div class="info-box">
                    <p class="info-content">訪客人數 {{ numberOfVisitors }} (當年度{{ numberOfVisitorsThisyear }}) 更新日期 {{ updateDate }}</p>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2024 社團法人中華民國器官捐贈協會.All Rights Reserved</p>
        </div>
    </footer>
</template>
<script setup lang="ts">
const numberOfVisitors = ref(3977434)
const numberOfVisitorsThisyear = ref(156520)
const updateDate = ref('2024年10月21日')
</script>
<style lang="scss" scoped>
.footer-box {
    background-color: #EFEFEE;

    .copyright {
        display: flex;
        justify-content: center;
        color: $main-content-color;
        font-size: 1rem;
        padding-bottom: 5vw;
    }
}
.footer-info {
    background-color: #EFEFEE;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    // padding-bottom: 0;

    @media screen and (max-width:481px) {
        flex-direction: column;
        width: 100%;
    }

    .footer-item {
        width: 25%;
        
        @media screen and (max-width:481px) {
            width: 80% !important;
        }

        border-left: 1px solid $main-content-color;
        margin: 2vw 0;
        padding-left: 2vw;
        // min-height: 10rem;
        font-size: 0.8rem;
        color: $main-content-color;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .info-box {
            align-items: center;
            display: flex;
            padding: 0.3rem 0;

            .visitors-number-content, .info-content {
                margin: 0;
                line-height: 1.5rem;
            }

            .map-icon, .phone-icon, .fax-icon , .email-icon {
                margin-right: 5px;
                line-height: 1.5rem;
                width: 1rem;
            }

            .fax-icon, .account {
                margin-left: 1.5rem;
            }
        }

    }
}


</style>