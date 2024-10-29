<!--  -->
<template>

    <Breadcrumbs firstRoute="家屬關懷" secoundRoute="如果你要懷念我"></Breadcrumbs>

    <section class="common-seciton">

        <h1 class="common-title">如果你要懷念我</h1>

        <div class="content-box">

            <p class="zh-tw-content">
                譯自／Robert N. Test所寫“To Remember Me”

                譯者／蘇惠智（本會創會祕書長）

                總有一天，

                我會躺在醫院的白色被單下。

                總有一個時候，

                醫生會認定我的腦功能已經停止。

                那表示，我的生命已經結束了。

                那時候，請千萬不要稱呼那是死亡之床，

                而應該稱為生命之床。

                因為我要將我的身體拿出來幫助別人，

                延續他們的生命。

                讓我的眼睛，給一位從來沒有見過人世的人；

                將我的心，給一位擁有一顆使他痛苦的心臟的人；

                把我的腎，交給那老是去洗腎的人；

                用我的筋骨、神經，讓跛腳的孩童行走；

                燒去我的殘骸，

                變成可綻放美麗花朵的肥料。

                如果必須埋葬什麼，

                請埋葬我的過錯、軟弱及偏見。

                將我的罪歸還魔鬼、將我的靈交給神。

                如果你要懷念我，請與我一樣；

                讓我們都永生不死。
            </p>

            <p class="en-content">

                by Robert N. Test

                The day will come when my body will lie upon a white sheet neatly tucked under four corners of a
                mattress located in a hospital busily occupied with the living and the dying.

                At a certain moment a doctor will determine that my brain has ceased to function and that, for all
                intents and purposes, my life has stopped.

                When that happens, do not attempt to instill artificial life into my body by the use of a machine. And
                don't call this my deathbed. Let it be called the Bed of Life, and let my body be taken from it to help
                others lead fuller lives.

                Give my sight to a man who has never seen a sunrise, a baby's face or love in the eyes of a woman.

                Give my heart to a person whose own heart has pain.

                Give my blood to the teen-ager who was pulled from the wreckage of his car, so that he might live to see
                his grandchildren play.

                Give my kidneys to one who depends on a machine to exist from week to week.

                Take my bones, every muscle, every fiber and nerve in my body and find a way to make a crippled child
                walk.

                Explore every corner of my brain.

                Take my cells, if necessary, and let them grow so that, someday, a speechless boy will shout at the
                crack of a bat and a deaf girl will hear the sound of rain against her windows.

                Burn what is left of me and scatter the ashes to the winds to help the flowers grow.

                If you must bury something, let it be my faults, my weaknesses and all my prejudice against my fellow
                man.

                Give my sins to the devil. Give my soul to God. If, by chance, you wish to remember me, do it with a
                kind deed or word to someone who needs you.

                If you do all I have asked, I will live forever.

            </p>


        </div>


    </section>


</template>

<script setup lang='ts'>

import { ref, reactive } from 'vue'
import Breadcrumbs from '@/components/layout/Breadcrumbs.vue'

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
        margin-bottom: 2%;
    }

    .content-box {
        margin-left: 10%;


    }
}
</style>