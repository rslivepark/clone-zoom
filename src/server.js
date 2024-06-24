import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/public', express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render('home'));
app.get('/*', (_, res) => res.redirect('/'));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

// 같은 서버에서 http, websocket 실행하는 거임 ㅇㅇ
// http server 위에 websocket server 설정
// 2개의 protocol이 같은 서버 공유
const server = http.createServer(app); //http server

const wss = new WebSocket.Server({ server }); // websocket server

// const handleConnection = (socket) => {
//   console.log(socket); // 연결된 브라우저
// };

// socket : 연결된 브라우저
// on : backend에 연결된 사람의 정보 제공해줌
wss.on('connection', (socket) => {
  console.log('Connected to Browser ✅');
  socket.on('close', () => console.log('Disconnected from the Browswer'));
  socket.on('message', (message) => {
    console.log(message.toString('utf-8'));
  });
  socket.send('Hello, there!!');
});

server.listen(3000, handleListen);
