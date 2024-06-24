// connect to backend
// send message from frontend to backend possible

const ul = document.querySelector('ul');
const messageForm = document.querySelector('form');

const socket = new WebSocket(`ws://${window.location.host}`); // 서버와 연결된 소켓

socket.addEventListener('open', () => {
  console.log('Connected from Server ✅');
});

socket.addEventListener('message', (message) => {
  console.log('New message: ', message.data);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from Server ✅');
});

// send message from frontend to backend
// setTimeout(() => {
//   socket.send('Hello from the Browser!!');
// }, 10000);

const handleSubmit = (e) => {
  e.preventDefault();
  const input = messageForm.querySelector('input');
  socket.send(input.value);
  input.value = '';
};

messageForm.addEventListener('submit', handleSubmit);
