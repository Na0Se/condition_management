<template>
<div>
    <div class="container">
    <h1>今日の体調は？</h1>
    <div class="box-icon">
    <div class="icon" @click="condition('BAD')">
        <svg xmlns="http://www.w3.org/2000/svg" height="6em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/></svg>
        <h2>BAD</h2>
    </div>
    
    <div class="icon" @click="condition('GOOD')">
        <svg xmlns="http://www.w3.org/2000/svg" height="6em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        <h2>GOOD</h2>
    </div>
    
    <div class="icon" @click="condition('GREAT')">
        <svg xmlns="http://www.w3.org/2000/svg" height="6em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1H393.6c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432s-140.2-50-159.2-117.9zm36.7-199.4l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 125.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"/></svg>
        <h2>GREAT</h2>
    </div>
    </div>
        <input type="text" placeholder="コメント" v-model="inputCondition.comment"/>
        
        <button @click="postCondition">登録</button>
    </div>
    
    

</div>
</template>

<script>
import {ref,inject,reactive} from 'vue';

export default {
    name: 'ConditionUser',
    setup(){

        const status = ref("");

        const condition = (cont) => {
            status.value = cont;
        };

        const inputCondition = reactive({
            status: status,
            comment: ""
        });

        const {registerCondition} = inject('fetchStore');

        const postCondition = () => {
            if(inputCondition.status !== ""){
                registerCondition(inputCondition);
            }
        };



        return{
            condition,
            inputCondition,
            postCondition
        }
    }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }

  .box-icon {
    display: flex;
    gap: 20px;
    flex-wrap: wrap; /* 横並びした要素を折り返す */
    justify-content: center; /* 要素を中央に寄せる */
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1; /* 各要素の幅を均等に広げる */
    margin-left: 10px;
    cursor: pointer;
  }

    /* ホバー時のスタイル */
    .icon:hover,
    .icon:active {
    color: blue; /* テキストの色を変更 */
    transform: scale(1.1); /* サイズを少し拡大 */
  }

  .container h2 {
    font-size: 1.2em;
    text-align: center;
  }

  input {
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    font-size: 16px;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
</style>