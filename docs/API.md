<!-- https://kahoo.blog/api-specification-markdown-with-apiblueprint/ -->
<!-- このサイトを参考にAPI Blueprintを作ってみる -->

# Group Login
ログイン機能

## ログイン [/api/login]

### ログイン [POST]

+ Request 200 (application/json)

    + Body

        ```json
        {
            "username": "minami",
            "password": "ハッシュ値変換"
        }
        ```

+ Response 401

    + Body

        ```json
        {
            "error": {
            "code": 401,
            "message": "Unauthorized"
            }
        }
        ```

        ```s
        
        ログイン認証に失敗した場合。
        ```


## 新規登録 [/api/register]

### 新規登録 [POST]


+ Request 201 (application/json)

    + Body

        ```json
        {
            "username": "minami",
            "password": "ハッシュ値変換",
            "password_confirmation":""
        }
        ```

+ Response 400

    + Body
        ```s
        同じユーザーネームの人がいた場合。
        パスワードが一緒じゃ無かった場合。

        ```

        ```json
        {
            "error": {
                "code": 400,
                "message": "Bad Request",
                "details": [
                {
                    "field": "username",
                    "message": "Invalid username"
                },
                {
                    "field": "password",
                    "message": "Password must be at least 8 characters long"
                }
                ]
                }
        }
        ```

# Group Health
体調管理機能

## 体調登録 [/api/health-logs]

### 体調入力機能 [POST]

+ Request 201

    + Headers
        Authorization : "ログイン時のハッシュ値"

    + Body

        ```json
        {
            "status": "GOOD",
            "comment": "いつも通り普通です"
        }
        ```

+ Response 401

    + Body

        ```json
        {
            "error": {
            "code": 401,
            "message": "Unauthorized"
            }
        }
        ```

        ```s
        
        ログイン認証に失敗した場合。
        ```
+ Response 400

    + Body
        ```s
        体調を登録しないと登録ボタンが機能しないようにフロントエンドで調整する。
        体調を登録せずに登録ボタンを押した場合。

        ```

        ```json
        {
            "error": {
                "code": 400,
                "message": "Bad Request",
                "details": [
                {
                    "field": "username",
                    "message": "Invalid username"
                },
                {
                    "field": "password",
                    "message": "Password must be at least 8 characters long"
                }
                ]
                }
        }
        ```

## みんなの体調画面表示機能 [/api/health-logs]

### みんなの体調画面表示機能 [GET]

+ Request 200

    + Headers
        Authorization : "ログイン時のハッシュ値"

    + Body

        ```json
        [
            {"user_id": 1,
             "username": "minami",
             "status": "GOOD",
             "comment": ""},
             
         ...]

        ```

+ Response 401

    + Body

        ```json
        {
            "error": {
            "code": 401,
            "message": "Unauthorized"
            }
        }
        ```

        ```s
        
        ログイン認証に失敗した場合。
        ```

## 追加画面でのユーザー追加機能 [/api/health-logs/:user_id]

### 追加画面でのユーザー追加機能 [POST]

+ Request 201

    + Headers
        Authorization : "ログイン時のハッシュ値"

    + Body

        ```json
        {
            "user_id": 2
        }
        ```

+ Response 401

    + Body

        ```json
        {
            "error": {
            "code": 401,
            "message": "Unauthorized"
            }
        }
        ```

        ```s
        
        ログイン認証に失敗した場合。
        ```
+ Response 400

    + Body
        ```s
        存在しないユーザーを登録した場合。

        ```

        ```json
        {
            "error": {
                "code": 400,
                "message": "Bad Request",
                "details": [
                {
                    "field": "username",
                    "message": "Invalid username"
                },
                {
                    "field": "password",
                    "message": "Password must be at least 8 characters long"
                }
                ]
                }
        }
        ```