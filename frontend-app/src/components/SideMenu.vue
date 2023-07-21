<template>
    <div class="background" @click="closeMenu">
      <nav class="drawer-menu">
        <h2>MENU</h2>
        <ul>
          <li><router-link to="/condition">体調入力</router-link></li>
          <li><router-link to="/health-logs">みんなの体調</router-link></li>
          <li><router-link to="/add">友達追加</router-link></li>
          <li><a @click="logout">ログアウト</a></li>
        </ul>
      </nav>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
  name: 'SideMenu',
  emits: ['openmenu'],
  setup (props, context) {
    const closeMenu = () => {
      // サイドメニューの開閉イベントを発行
      context.emit('openmenu');
    };

    const router = useRouter();

    const logout = () => {
      // ログアウト処理をここに記述する。クッキーのセッションを消すのだ！
      // ログアウト後に /login に遷移する
      router.push('/');
    };

    return { 
        closeMenu,
        logout
    };
  }
};
</script>
