<template>
  <!-- 最外層新增一個wrapper,是為了搭配content 撐開中間內容為空的路由組件來達成一頁的效果  -->
  <div class="wrapper">

    <!-- 共用的Header -->
    <Header></Header>
    <Menu class="menu-bar"></Menu>
    <!-- 先用一個main標籤將之後要顯示的路由組件包起來 -->
    <main class="content">
      <NuxtPage></NuxtPage>

      <nuxt-link class="fix-button01" to="/sign-online">
        <img src="@/assets/img/sign-online.png">
      </nuxt-link>

      <nuxt-link class="fix-button02" to="/donate">
        <img src="@/assets/img/donate.png">
      </nuxt-link>

      <!-- 將button放置在main內容下,預設使用fixed黏在整個頁面,到Footer時則轉為 absolute -->
      <div class="top-button" @click="backToTop">
        <img src="@/assets/img/top-button.png" alt="" class="top-button-img">
      </div>



    </main>

    <!-- 共用的Footer -->
    <Footer ref="footerRef"></Footer>
  </div>

</template>

<script setup lang="ts">

import Header from './components/layout/Header.vue';
import Menu from '@/components/layout/Menu.vue';
import Footer from '@/components/layout/Footer.vue';
import { ref } from 'vue';



const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

</script>


<style lang="scss">
//覆蓋子選單的邊框
.my-popper {
  --el-popover-border-radius: 15px;

  .el-menu--popup {
    border-radius: 15px;
    min-width: 150px !important;
    padding: 0 !important;
  }

  li {
    padding: 0 !important;
    height: auto !important;
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
    position: relative;
    // background: #F1E7E8;


    .fix-button01,
    .fix-button02,
    .top-button {
      position: fixed;
      transition: 0.5s;
      z-index: 400;
      cursor: pointer;

      img {
        width: 100%;
        max-width: 60px;

        @media screen and (max-width:850px) {
          max-width: 50px;
        }

        @media screen and (max-width:481px) {
          max-width: 40px;
        }

      }

      &:hover {
        scale: 1.1;
      }
    }

    .fix-button01 {
      top: 20%;
      right: 0;

      @media screen and (max-width:850px) {}

      @media screen and (max-width:481px) {}

    }

    .fix-button02 {
      top: 48%;
      right: 0;

      @media screen and (max-width:850px) {
        top: 35%;
      }

      @media screen and (max-width:481px) {
        top: 38%;
      }

    }

    .top-button {
      bottom: 10%;
      right: 0;

      @media screen and (max-width:850px) {}

      @media screen and (max-width:481px) {}

    }

  }

  .menu-bar {
    top: 0;
    z-index: 300;
  }

}
</style>
