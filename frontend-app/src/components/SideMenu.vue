<template>
    <div class="background" @click="closeMenu">
      <nav class="drawer-menu">
        <h2>MENU</h2>
        <ul>
          <li><router-link to="/condition">体調入力</router-link></li>
          <li><router-link to="/health-logs">みんなの体調</router-link></li>
          <li><router-link to="/add">友達追加</router-link></li>
          <li><router-link to="/" @click="logout">ログアウト</router-link></li>
        </ul>
      </nav>
    </div>
</template>
<script>

export default {
  name: 'SideMenu',
  emits: ['openmenu'],
  setup (props, context) {
    const closeMenu = () => {
      // サイドメニューの開閉イベントを発行
      context.emit('openmenu');
    };

    const logout = () => {
      // ログアウト処理をここに記述する。クッキーのセッションを消すのだ！
      // ログアウト後に /login に遷移する

    };

    return { 
        closeMenu,
        logout
    };
  }
};
</script>
<style>
.drawer-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.8);
}

.drawer-menu h2 {
  text-align: center;
  color: white;
}

.drawer-menu li {
  line-height: 1.4;
}

.drawer-menu li:not(:first-child) {
  border-top: 1px solid rgba(255, 255, 255, 0.6);
}

.drawer-menu a {
  display: block;
  color: #047aed;
  font-size: 0.8em;
  padding: 1em 2em;
}
.drawer-menu a:hover {
  background-color: #333;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}
</style>