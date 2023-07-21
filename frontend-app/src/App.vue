<template>
  <div>
    <router-link to="/post">連絡先登録</router-link> / 
    <router-link to="/list">連絡先一覧</router-link>
    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
import {provide} from 'vue';
import {fetchStore} from './store/fetchStore.js';

export default {
  name: 'App',
  setup(){
    provide('fetchStore',fetchStore());
  }
};
</script>