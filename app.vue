<template>
  <!-- 最外層新增一個wrapper,是為了搭配content 撐開中間內容為空的路由組件來達成一頁的效果  -->
  <div class="wrapper">

    <!-- 共用的Header -->
    <Header3></Header3>
    <HeaderTest></HeaderTest>
    <!-- 先用一個main標籤將之後要顯示的路由組件包起來 -->
    <main class="content">
      <NuxtPage></NuxtPage>
    </main>

    <!-- 共用的Footer -->
    <Footer></Footer>
  </div>

</template>

<script setup lang="ts">

import Header3 from '@/components/layout/Header3.vue';
import HeaderTest from './components/layout/HeaderTest.vue'; 
import Footer from '@/components/layout/Footer.vue';
import SSRrequest from '@/composables/SSRrequest'
import CSRrequest from '@/composables/CSRrequest'
//引入toRaw變為普通對象
import { toRaw, ref } from 'vue';
import { countdownEmits, genFileId } from 'element-plus'
import type { UploadProps, UploadInstance, UploadRawFile } from 'element-plus'


//這邊使用在easyState.ts , export 出來的useScrollPosition
//獲得全局共享變量scrollPosition
const scrollPosition = useScrollPosition()

//獲得全局共享變量viewportWidth視口寬度
const viewportWidth = useViewportWidth()




//掛載完畢
onMounted(() => {
  //監聽滑鼠滾動事件
  window.addEventListener('scroll', handleScroll);

  //首次加載時,加載視口寬度,
  viewportWidth.value = window.innerWidth;
  // console.log("Viewport width: " + viewportWidth.value);

})

//卸載之前
onBeforeUnmount(() => {
  //移除監聽滑鼠滾動事件
  window.removeEventListener('scroll', handleScroll);
})


//當有滑鼠滾動事件被觸發,需要執行的回調函數
function handleScroll() {
  // 獲取滾動到的位置
  let scrollPositionY = window.scrollY
  ////為全局變量scrollPosition進行賦值
  scrollPosition.value = scrollPositionY
  //console.log('滾輪位置',scrollPosition.value)
}



</script>


<style lang="scss">



//覆蓋子選單的邊框
.my-popper {
  --el-popover-border-radius:15px;
  .el-menu--popup {
    border-radius: 15px;
    min-width: 150px !important;
    padding: 0 !important;
    --el-menu-text-color: #1C2B6E !important;
    --el-menu-active-color: #6A6969 !important;
    --el-menu-hover-text-color: #6A6969 !important;
    --el-menu-hover-bg-color: none !important;
  }
  li{
    padding: 0 !important;
    height:auto !important;
    margin: 0 10px !important;
    line-height: 30px !important;
  }

}

//這個設定是撐開中間內容為空的組件
//讓他Header組件和Footer組件固定在最上方和最下方
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex-grow: 1;

  }

  

  

}
</style>
