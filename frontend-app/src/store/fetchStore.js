import { reactive } from 'vue';
import { useRouter } from 'vue-router';

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
    if (!response.ok) {
      window.alert('ユーザーネームかパスワードが間違ってるみたいだよ');
    } else {
      const router = useRouter();
      router.push('/condition');
      window.alert('成功');
    }
  };

  return {
    state,
    loginUser
  };
}
