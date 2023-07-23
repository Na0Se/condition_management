import { reactive } from 'vue';


export function fetchStore() {
  const state = reactive({
    users: [] // ユーザーデータ
  });

  const getApiUrl = (path) => {
    return `http://localhost:3001${path}`;
  };

  const loginUser = async (user) => {
    // HTTP通信用のオプションオブジェクトを用意
    const fetchOptions = {
      method: 'POST',
      // 送信したいデータをJSON形式にしてオプションオブジェクトに追加
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    };
    // WebAPIへ通信開始
    const response = await window.fetch(getApiUrl('/api/login'), fetchOptions);
    
    // レスポンスが'OK'(status code:200)でなければエラーとして処理する
    if (!response.ok) throw new Error(`ERROR:${response.status} ${response.statusText}`);
    
  };

  const registerUser = async (user) => {
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type' : 'application/json'}
    };

    const response = await window.fetch(getApiUrl('/api/register'), fetchOptions);

    if(response.status !== 201){
      window.alert('新規登録ができなかったよ！？');
      throw new Error(`ERROR:${response.status} ${response.statusText}`);
    }
  };

  return {
    state,
    loginUser,
    registerUser
  };
}
