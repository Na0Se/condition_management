<template>
    <div>
        <h1>体調管理アプリ</h1>

        <form @click="login">
        <input type="text" placeholder="username" required v-model="inputUser.username"/><br>
        <input type="password" placeholder="password" required v-model="inputUser.password"/><br>
        <button>LOGIN</button>
        </form>
    </div>
</template>

<script>
import {inject} from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'LoginUser',
    setup(){
        const inputUser = {
            username: '',
            password: ''
        }

        const {loginUser} = inject('fetchStore');

        const router = useRouter();

        const login = async (event) => {
            event.preventDefault();
            if(inputUser.username&&inputUser.password){
                try{
                    await loginUser(inputUser);
                    router.push('/condition');
                } catch(error){
                    window.alert('ユーザーネームかパスワードが間違ってるみたいだよ');
                }
            }
        };
        
        return{
            inputUser,
            login
        }
    }
}
</script>