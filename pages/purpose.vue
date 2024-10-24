<!--  -->
<template>
    <section class="common-seciton" >

        <h1 class="common-title"> 宗旨任務 </h1>

        <div class="purpose-box" >
            
        </div>

    </section>


</template>

<script setup lang='ts'>

import {ref,reactive} from 'vue'

</script>

<style scoped lang="scss" >

.common-seciton{
    width: $common-section-width;
    margin: $common-section-margin;
    
    
    .common-title{
        color: $main-text-color;
        font-weight: $common-title-font-weight;
        font-size: $common-title-font-size;
        letter-spacing: $common-title-letter-spacing;
        
        margin-left: 5% ;
    }

}


</style>
