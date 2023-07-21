<template>
  <div class="wrapper">
    <transition name="menu-fade">
      <side-menu v-if="menuState" @openmenu="openMenu" />
    </transition>
    <div class="main-pane">
      <div class="navbar">
        <div class="container flex">

          <div class="menu-btn">
            <h1 class="logo">体調管理アプリ</h1>
          </div>
          <nav>
            <i class="menu-btn-icon fas fa-bars" @click="openMenu"></i>
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
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
</style>