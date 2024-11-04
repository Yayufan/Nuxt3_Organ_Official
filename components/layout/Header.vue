<template>
    <header class="PC-menu-box">
        <img class="hambuger-menu" src="@/assets/img/hamburger-menu-more-svgrepo-com.svg" alt="" @click="openMenu">
        <div class="logo-box">
            <nuxt-link :to="'/'"><img ref="" class="logo" src="@/assets/img/logo.png" alt="logo"></img></nuxt-link>
        </div>
        <div class="input-section">
            <el-input class="input" v-model="search">
                <template #suffix>
                    <el-icon class="el-input__icon">
                        <ElIconSearch />
                    </el-icon>
                </template>
            </el-input>
            <nuxt-link class="contact" :to="'/'">聯絡我們</nuxt-link>
        </div>
    </header>
    <div v-if="idOpened" class="menu">
        <div class="input-section">
            <el-input class="input" v-model="search">
                <template #prefix>
                    <img class="letter-icon" src="@/assets/img/letter-aa-large-svgrepo-com.svg" alt="">
                </template>
                <template #suffix>
                    <el-icon class="el-input__icon">
                        <ElIconSearch />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <div class="menu-item-section">
            <div class="main-menu">
                <div :class="['menu-item', { active: selectedIndex === index }]" v-for="(item, index) in menuItem"
                    @click="selectItem(index)">{{ item.title }}<div class="icon-box"><el-icon
                            v-if="selectedIndex === index">
                            <ElIconArrowRight />
                        </el-icon></div>
                </div>
            </div>
            <div class="sub-menu">
                <div class="menu-item" v-for="item in submenu"><nuxt-link :to="item.link" @click="idOpened = false">{{ item.title }}</nuxt-link></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'

const search = ref('')
const idOpened = ref(false)

const openMenu = () => {
    idOpened.value = !idOpened.value
}

const menuItem = [
    {
        title: '加入我們',
        subMenu: [
            {
                title: '宗旨任務',
                link: '/purpose'
            }, {
                title: '加入會員',
                link: '/become-member'
            }, {
                title: '協會年表',
                link: '/association-chronology'
            }, {
                title: '歷年成果(簽卡分析)',
                link: '/achievements'
            }, {
                title: '臉書粉絲團',
                link: 'https://www.facebook.com/organassociation/'
            },]
    },
    {
        title: '訊息看板',
        subMenu: [{ title: '最新消息', link: 'news' }, { title: '活動花絮', link: '/eventHeights' }, { title: '合作申請單', link: '/cooperation' }]
    },
    {
        title: '認識器捐',
        subMenu: [{ title: '器捐學堂', link: '/organ-donation' }, { title: '器捐捐贈會刊', link: '/jouranal' }, { title: '器捐生命故事:捐贈者家屬篇', link: '/story-donar-family' }, { title: '器捐生命故事:受捐者篇', link: '/story-recipient' }, { title: '影音專區', link: '/video-area' }, { title: '文宣下載', link: '/brochure-download' },{title:'法令規章', link:'/laws'} , {title:'白袍心聲', link:'/doctor-voice'}]
    },
    {
        title: '家屬關懷',
        subMenu: [{title: '協助資源', link: '/assistance-resources'},{title: '好書推薦', link: '/book-recommendations'},{title: '家屬資料填寫', link: '/'},{title: '社工專欄', link: '/social-work-column'},{title: '如果你要懷念我', link: '/miss-me'}]
    },
    {
        title: '捐款贊助',
        subMenu: []
    },
    {
        title: '簽署器捐',
        subMenu: [{title: '線上簽屬', link: '/'},{title: '簽卡停看聽', link: '/'},{title: '撤銷簽屬', link: '/'}]
    }
]
const submenu = ref(menuItem[0].subMenu)

const active = ref(false);

const selectedIndex = ref(0);
const selectItem = (index: number) => {
    selectedIndex.value = index;
    submenu.value = menuItem[index].subMenu;
}
</script>
<style lang="scss" scoped>
.PC-menu-box {
    width: 100vw;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 850px) {
        justify-content: flex-start;
        box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
    }

    .hambuger-menu {
        display: none;

        @media screen and (max-width: 850px) {
            display: block;
            margin: 1vw 35% 1.5vw 1vw;
            width: 5vw;
            cursor: pointer;
        }
    }

    .logo-box {
        margin-left: 40vw;

        @media screen and (max-width: 850px) {
            // margin: 0 0 1.5vw 0;
            width: 30vw;
            margin: 1vw 0 1.5vw 0;
        }

        width: 20vw;

        img {
            width: 100%;
        }
    }

    .input-section {
        @media screen and (max-width: 850px) {
            display: none;
        }

        width: 25vw;
        display: flex;
        align-items: flex-end;
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

.menu {
    display: none;

    @media screen and (max-width: 850px) {
        // display: none;
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        min-height: 750px;
        width: 60vw;
        position: absolute;
        left: 0;
        top: 10.8vw;
        z-index: 1000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); 
    }

    .input-section {
        display: flex;
        justify-content: center;

        .el-input {
            width: 65%;
            padding: 10px 0 15px 0;
        }

        .letter-icon {
            width: 3vw;
            margin-right: 1vw;
        }

        :deep(.el-input__wrapper) {
            background-color: $main-color;
            max-height: 1.8rem;
            border-radius: 30px;
            // width: 70vw;
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
    }

    .menu-item-section {
        display: flex;
        border-width: 0.5px 0 0.5px 0;
        min-height: 100%;
        border-color: $main-content-color;
        border-style: solid;

        .main-menu {
            display: flex;
            width: 40%;
            flex-direction: column;

            .menu-item {
                display: flex;
                justify-content: center;
                font-size: 1.5rem;
                line-height: 60px;
                border: 1px solid #DDDDDD;
                width: 100%;
                min-height: 60px;

                .icon-box {
                    min-width: 1.5rem;
                }

                .el-icon {
                    position: relative;
                    top: 3.2px;
                    color: #FFFFFF;
                }

                &.active {
                    color: #FFFFFF;
                    background-color: #9BB179;
                    border-color: #9BB179;
                }
            }
        }

        .sub-menu {
            display: flex;
            // flex-grow: 1;
            width: 60%;
            flex-direction: column;

            .menu-item {
                text-align: center;
                font-size: 1.4rem;
                line-height: 60px;
                border: 1px solid #DDDDDD;
                width: 100%;
                min-height: 60px;

            }
        }
    }
}
</style>