### 209410108 劉泓緯

###超級重要的甘苦談!!!!!!!!!!!!!!
![](https://i.imgur.com/I8iAYLO.png)
我做不出來，每次都顯示錯誤在 NODE，但是試過網路上的方法也沒用，就一直卡在這邊 HEROKU 就是跑不出來，請別人幫忙看也沒用，大家都說我跟他們一樣的 CODE，所以我很無解。

### Q1

> 請修改 routes/index.js 在 render index.ejs 時傳入學號及姓名，index.ejs 要有姓名及學號，需要用 <%= name %> 及 <%= id %> 接收傳入的學號及姓名，並顯示下圖片。繳交
> Chrome 截圖
> routes/index.js code (程式碼)
> views/index.ejs code (程式碼)

![](https://i.imgur.com/aCR6dKl.png)
![](https://i.imgur.com/ljTEUTQ.png)
![](https://i.imgur.com/HSl8lk7.png)

### Q2

> crown theme 裡面的 index.ejs 複製到 views/crown_xx.ejs，並能在 Chrome 中顯示路由 localhost:3000/crown_xx。標題要有學號及姓名，請繳交
> Chrome 截圖，要有 URL
> routes/crown_xx.js ，相關重點以圖片呈現
> views/crown_xx.ejs ，相關重點以圖片呈現

![](https://i.imgur.com/pOdwZMH.jpg)
![](https://i.imgur.com/Okw4EhC.png)
![](https://i.imgur.com/qePfVDA.png)

### Q3

> P3. (local) 請將 crown_xx.ejs 裡面 category 五筆資料 PostgreSQL 中，資料庫名稱 crown_xx, table 名稱 category_xx。繳交 Chrome 截圖
> ![](https://i.imgur.com/rDuTt1H.png)

### Q4

> 請將 P2 這一題的結果，在 heroku server 上顯示，路由是 /crown_xx。請繳交
> Chrome 截圖 (要看到 URL，上面有 heroku app )
> Github Repo URL
> Heroku 畫面，要有 app 名稱

> https://github.com/209410108h/1101-crown_08.git

![](https://i.imgur.com/4lWKtST.png)

###Q5
(heroku) 請將 P3 資料庫 category_xx 五筆資料，放到 Heroku Posgres 上。請繳交
Chrome 截圖 (要看到 URL，上面有 heroku database, category_xx, 和 5 筆資料 )
Heroku 畫面，要看到 DATABASE_URL 資料
請提供 Heroku DATABASE_URL 資料，並將之拆分提供文字放入 code (```)中

```
host: ec2-3-222-24-200.compute-1.amazonaws.com
port: 5432
database: 5432/d27ifj69239c6u
username: jtkekrcywiuozg
password: d7a6ce537a48a7d23fabba406b99dd171babe31023365c190f7f8f330ad9878c
```

###Q6

> P6. (local) 將 views/crown_xx.ejs 複製一份成 crown2_xx.ejs，能夠直接到 PostgreSQL server 取得 category 5 筆資料，套入到 crown2_xx.ejs 中。在 Chrome 中要顯示路由 /crown2_xx 。標題要有 Crown2_xx (from title) 學號 (from id) 及姓名(from name)。請繳交
> Chrome 截圖，要有 URL
> app.js ，相關重點以圖片標註呈現
> routes/crown2_xx.js，相關重點以圖片標註呈現呈現
> views/crown2_xx.ejs ，相關重點以圖片標註呈現呈現

![](https://i.imgur.com/zMvkNd5.jpg)
![](https://i.imgur.com/cScod3h.png)
![](https://i.imgur.com/Kf2Q8RI.png)
![](https://i.imgur.com/Tv54h3K.png)

###Q7
HEROKU 出不來，有寫在前面
###Q8
(local) 實作 api 路由 /api_xx/category_xx，能夠直接到 PostgreSQL server 取得 category 5 筆資料並以 json 方式顯示。請繳交
Chrome 截圖，要有 路由 /api_xx/category_xx
app.js ，相關重點以圖片標註呈現
routes/api_xx.js，相關重點以圖片標註呈現呈現
controllers/apiCrown2Controller_xx.js ，相關重點以圖片標註呈現呈現
![](https://i.imgur.com/Hcya6AB.png)

###Q9
HEROKU 出不來，有寫在前面
