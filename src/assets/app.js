import { time, userConnected, userNoneConnected, generateOnlineStats } from './utils.js';
const bodys = document.querySelector('.content');
const socket = io();
let names = '';
let message = '';
let inputMessage;
let usersOnline = 0;


function buttonsLogic(e) {
  e.preventDefault();
  names = e.target.name.value;
  if (names === '') {
    alert('error with name length');
  } else {
    bodys.innerHTML = '';
    bodys.insertAdjacentHTML('beforeend', userConnected(names));
    document.querySelector('.btn-sec').addEventListener('click', () => {
      inputMessage = document.querySelector('.input__message');
      message = inputMessage.value;
      inputMessage.value = '';
      if (message) {
        socket.emit('chat message', { message: message, name: names });
      }
    });
  }
}



bodys.insertAdjacentHTML('beforeend', userNoneConnected());
bodys.addEventListener('submit', buttonsLogic);

socket.on('chat message', (data) => {
  const item = document.createElement('li');
  item.innerHTML = `<div class="li__wrapper"><div class="li__left"><span class="author">${
    data.name
  }</span><span>${
    data.message
  }</span></div><div class="li__right">${time()}</div></div>`;
  bodys.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('online', (data) => {
  usersOnline = data.users;
  bodys.insertAdjacentHTML('beforeend', generateOnlineStats(data.users));
});
