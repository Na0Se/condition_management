<template>
  <div class="form-container">
    <label for="dateInput">表示する日付</label>
    <input type="date" id="dateInput" name="dateInput" v-model="inputDate.created_at">

    <ul v-for="user in state.users" :key="user.id">
      <li>{{ getUserById(user.user_id) }} {{ user.condition }} {{ user.comment }} <fa-icon icon="leaf"/></li>
      <!-- v-if="inputDate.created_at === user.created_at"したいけど、うまくいかない -->
    </ul>

    <button>+友達を追加</button>
  </div>
</template>

<script>
import {inject} from 'vue';

export default {
    name: 'EverybodyCondition',
    setup(){
        const {fetchFriends,state,addName} = inject('fetchStore');
        fetchFriends();
        addName();

        const getUserById = (id) => {
            
            const user = state.name.filter(
            // idを基準として商品データを抽出する
            (element) => element.id === id
            )[0]; // idでfilterすると必ず結果は一軒になる
            const getuser = {...user};

            return getuser.username;
        };
        
        const inputDate = {
            created_at: ""
        }

        

        return {
            state,
            getUserById,
            inputDate
        }

    }
}
</script>

<style scoped>
/* 全体のコンテナのスタイル */
body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    /* フォームコンテナのスタイル */
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    /* 日付入力ラベルのスタイル */
    label {
      margin-bottom: 10px;
    }

    /* 日付入力フィールドのスタイル */
    input[type="date"] {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 200px;
      margin-bottom: 20px;
    }

    /* 友達リストのスタイル */
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    li {
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }

    /* ボタンのスタイル */
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
    }

    /* ボタンのホバー時のスタイル */
    button:hover {
      background-color: #45a049;
    }
</style>