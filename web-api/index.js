const express = require('express');
const path = require("path");
const cors = require('cors');
const app = express()

app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
// 8080ポートに対して許可する場合
app.use(cors({
    origin: 'http://localhost:8080'
  }));

const users = [
    { id: 1, username: 'name1', password: 'hoge', friend: [2] },
    { id: 2, username: 'name2', password: 'hoge', friend: [] },
    { id: 3, username: 'name3', password: 'hoge', friend: [] }
];

const health_logs = [
    { id: 1, user_id: 1, condition: 'GOOD', comment: 'いつも通り元気です', created_at: '2023-03-01 00:00:00' },
    { id: 2, user_id: 3, condition: 'GOOD', comment: '', created_at: '2023-03-02 00:00:00' },
    { id: 3, user_id: 3, condition: 'BAD', comment: '悪い', created_at: '2023-03-02 12:00:00' },
    { id: 4, user_id: 2, condition: 'GOOD', comment: '', created_at: '2023-03-02 00:00:00' }
];


app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // ユーザー名とパスワードがusers配列に存在するかチェック
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        // ログイン成功
        res.status(200).json({ user });
    } else {
        // ログイン失敗
        res.status(401).json({ error: { code: 401, message: "Unauthorized" } });
    }
});


app.post('/api/register', (req, res) => {
    const { username, password, password_confirmation } = req.body;
    const newUser = {
        id: users.length + 1,
        username: username,
        password: password,
        friend: []
    }

    // ユーザー名とパスワードがusers配列に存在するかチェック
    const user = users.find((user) => user.username === username);

    if (!user && password === password_confirmation) {
        // ログイン成功
        res.status(201).json({ newUser });
        users.push(newUser);

    } else {
        // ログイン失敗
        res.status(400).json({ error: { code: 400, message: "Bad Request" } });
    }
});


app.post('/api/health-logs', (req, res) => {
    const { status, comment } = req.body;
    const now = new Date();
    const timestamp = now.toISOString();

    const newLog = {
        id: health_logs.length + 1,
        user_id: 1,
        condition: status,
        comment: comment,
        created_at: timestamp
    }

    if (status) {
        // 成功の場合（ステータスコード：201）
        res.status(201).json(newLog);
        health_logs.push(newLog);
    } else if (!status) {
        // 失敗の場合（ステータスコード：400）
        res.status(400).json({
            error: {
                code: 400,
                message: 'Bad Request',
                details: [
                    { field: 'username', message: 'Invalid username' },
                    { field: 'password', message: 'Password must be at least 8 characters long' }
                ]
            }
        });
    } else {
        // その他の場合（ステータスコード：500）
        res.status(500).json({ error: { code: 500, message: 'Internal Server Error' } });
    }
});

app.get('/api/health-logs', (req, res) => {
    // リクエストヘッダーからAuthorizationヘッダーを取得
    // const authHeader = req.headers['authorization'];

    // ログイン時のハッシュ値と比較
    //if (authHeader === loginHash) {
    // 認証成功の場合
    res.status(200).json(health_logs);
    //} 
    // else {
    //     // 認証失敗の場合
    //     res.status(401).json({
    //         error: {
    //             code: 401,
    //             message: 'Unauthorized',
    //         },
    //     });
    // }
});

app.post('/api/health-logs/:user_id', (req, res) => {
    const user_id = parseInt(req.params.user_id);

    // users配列から指定されたuser_idを持つユーザーを探す
    const user = users.find((user) => user.id === user_id);

    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    const { friends_id } = req.body;

    // ユーザーのfriendにuser_idを追加。配列の中身だけ追加したいので、スプレッド演算子を使う。
    user.friend.push(...friends_id);

    res.status(201).json(user);
});

app.get('/api/users',(req,res) => {
    res.status(200).json(users);
});


app.listen(3001)