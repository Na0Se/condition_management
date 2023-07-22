// vue-routerインポート
import { createRouter, createWebHistory } from 'vue-router';
// 遷移するコンポーネントをインポート
import AddUser from './components/AddUser';
import ConditionUser from './components/ConditionUser';
import EverybodyCondition from './components/EverybodyCondition';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';

// ルーティング設定（URL→コンポーネントの紐付け）
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginUser
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterUser
  },
  {
    path: '/health-logs',
    name: 'health-logs',
    component: EverybodyCondition
  },{
    path: '/condition',
    name: 'condition',
    component: ConditionUser
  },{
    path: '/add',
    name: 'add',
    component: AddUser
  }
];

// Vue Routerインスタンスの生成と初期化
const router = createRouter({
  history: createWebHistory(), // スラッシュによる遷移
  routes // ルーティング設定
});

export default router;