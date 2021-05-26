# [ALPHA Camp] Middleware Practice - Q1: 伺服器接收請求紀錄


## Features/功能
伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡。

## Environment Setup/環境建置
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon) -for development only

## Installation/專案安裝
### Clone
```
git clone https://github.com/Jennesy/A13-Middleware-Q1
cd A13-Middleware-Q1
npm install
```

### Run/執行專案
```
npm run start
```
若成功開啟伺服器你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看網站。

### Develop mode/專案開發模式
開啟此模式時，當你修改程式並存檔完畢，無須重啟伺服器，可以重新整理 http://localhost:3000 即可查看編輯效果。
```
npm run dev
```
若成功你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看專案目前功能。