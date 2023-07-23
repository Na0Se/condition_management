<template>
    <div class="app-container">
    <h1>体調管理アプリ</h1>
    <form class="register-form">
      <label for="username">ユーザーネーム：</label>
      <input type="text" id="username" placeholder="username" required v-model="inputUser.username" /><br>
      <label for="password">パスワード：</label>
      <input type="password" id="password" placeholder="password" required v-model="inputUser.password" /><br>
      <label for="morePassword">パスワード再入力：</label>
      <input type="password" id="morePassword" placeholder="one more password" required v-model="inputUser.password_confirmation" /><br>
      <button @click.prevent="register">REGISTER</button>
    </form>
    <router-link class="back-link" to="/">ログイン画面に戻る</router-link>
  </div>
</template>

<script>
import {inject} from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'RegisterUser',
    setup() {
        const inputUser = {
            username: '',
            password: '',
            password_confirmation: ''
        }

        const {registerUser} = inject('fetchStore');
        const router = useRouter();

        const register = async () => {
            if (inputUser.username && inputUser.password && inputUser.password_confirmation) {
                try{
                    await registerUser(inputUser);
                    router.push('/condition');
                } catch(error){
                    console.log(error);
                }
            }
        };

        return {
            inputUser,
            register
        }
    }
}
</script>

<style scoped>
.app-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-form label {
  font-weight: bold;
}

.register-form input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.back-link {
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}
</style>