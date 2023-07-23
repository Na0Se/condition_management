<template>
    <div class="app-container">
    <h1>体調管理アプリ</h1>
    <form class="login-form">
      <label for="username">ユーザーネーム：</label>
      <input type="text" id="username" placeholder="username" required v-model="inputUser.username" /><br>
      <label for="password">パスワード：</label>
      <input type="password" id="password" placeholder="password" required v-model="inputUser.password" /><br>
      <button @click="login">LOGIN</button>
    </form>
    <router-link class="register-link" to="/register">初めての人はこちらから新規登録</router-link>
  </div>
</template>

<script>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginUser',
    setup() {
        const inputUser = {
            username: '',
            password: ''
        }

        const { loginUser } = inject('fetchStore');

        const router = useRouter();

        const login = async (event) => {
            event.preventDefault();
            if (inputUser.username && inputUser.password) {
                try {
                    await loginUser(inputUser);
                    router.push('/condition');
                } catch (error) {
                    window.alert('ユーザーネームかパスワードが間違ってるみたいだよ');
                }
            }
        };

        return {
            inputUser,
            login
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

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form label {
  font-weight: bold;
}

.login-form input {
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

.register-link {
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}
</style>