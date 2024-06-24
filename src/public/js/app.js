// connect to backend
// send message from frontend to backend possible

const socket = new WebSocket(`ws://${window.location.host}`); // 서버와 연결된 소켓

socket.addEventListener('open', () => {
  console.log('Connected from Server ✅');
});

socket.addEventListener('message', (message) => {
  console.log('New message\n', message.data, '\nfrom the server');
});

socket.addEventListener('close', () => {
  console.log('Disconnected from Server ✅');
});

setTimeout(() => {
  socket.send('Hello from the Browser!!');
}, 10000);
