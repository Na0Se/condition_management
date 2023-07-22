<template>
  <div class="wrapper">
    <transition name="menu-fade">
      <side-menu v-if="menuState" @openmenu="openMenu" right/>
    </transition>
    <div class="main-pane">
      <div class="navbar">
        <div class="container flex">

          <div class="menu-btn">
            <h1 class="logo">体調管理アプリ</h1>
          </div>
          <nav>
            <button @click="openMenu">メニュー</button>
          </nav>
        </div>
        
      </div>
      <div class="container">
          <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import { provide, ref } from 'vue';
import { fetchStore } from './store/fetchStore.js';
import SideMenu from './components/SideMenu.vue';

export default {
  name: 'App',
  components: {
    SideMenu
  },
  setup() {
    provide('fetchStore', fetchStore());

    // サイドメニューの開閉フラグ
    const menuState = ref(false);
    const openMenu = () => {
      // サイドメニューの開閉フラグのtrue/falseを反転している）
      menuState.value = !menuState.value;
    };

    return {
      menuState,
      openMenu
    };
  }
};
</script>

<style scoped>
/* メニューのスライドアニメーション */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

/* メインペインの余白 */
.main-pane {
  padding: 20px;
}

/* ナビゲーションバーのスタイル（必要に応じて調整） */
.navbar {
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-btn {
  display: flex;
  align-items: center;
}

.logo {
  margin: 0;
}

nav button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>