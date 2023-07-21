<template>
    <div>
        <h1>体調管理アプリ</h1>

        <form>
        <input type="text" placeholder="username" required v-model="inputUser.username"/><br>
        <input type="password" placeholder="password" required v-model="inputUser.password"/><br>
        <button @click="login">LOGIN</button>
        </form>
    </div>
</template>

<script>
import {inject} from 'vue';

export default {
    name: 'LoginUser',
    setup(){
        const inputUser = {
            username: '',
            password: ''
        }

        const {loginUser} = inject('fetchStore');

        const login = () => {
            loginUser(inputUser)
        };
        
        return{
            inputUser,
            login
        }
    }
}
</script>