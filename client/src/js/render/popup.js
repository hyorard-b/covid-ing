import { controllers } from 'chart.js';

const $popup = document.querySelector('.popup');
const $popupOverlay = document.querySelector('.popup-overlay');
const $btnClose = document.querySelector('.btn-close');
const $lightBtn = document.querySelector('#light-btn');
const $darkBtn = document.querySelector('#dark-btn');
const $setDarkBtn = document.querySelector('.set-dark-btn');

const myStorage = window.localStorage;

const popupHandler = () => {
  const darkmode = myStorage.getItem('setMode');

  if (darkmode === null) {
    $popup.style.setProperty('display', 'block');
    $popupOverlay.style.setProperty('display', 'block');
  } else if (darkmode === 'light') {
    changeLight();
  } else {
    changeDark();
  }

  $btnClose.onclick = () => {
    $popup.style.display = 'none';
    $popupOverlay.style.display = 'none';
  };

  $popupOverlay.onclick = () => {
    $popup.style.display = 'none';
    $popupOverlay.style.display = 'none';
  };

  $lightBtn.onclick = () => {
    myStorage.setItem('setMode', 'light');
    changeLight();
  };

  $darkBtn.onclick = () => {
    myStorage.setItem('setMode', 'dark');
    changeDark();
  };

  $setDarkBtn.onclick = () => {
    const darkmode = myStorage.getItem('setMode');

    if (darkmode === 'light') changeDark();

    if (darkmode === 'dark') changeLight();
  };
};

const changeLight = () => {
  myStorage.setItem('setMode', 'light');
  document.documentElement.style.setProperty('--main-bg', '#fff');
  document.documentElement.style.setProperty('--sub-bg', '#FCFCFC');
  document.documentElement.style.setProperty('--main-text', '#616161');
  document.documentElement.style.setProperty('--sub-text', '#A3A3A3');
  document.documentElement.style.setProperty(
    '--sel-high-bg',
    'rgba(251, 151, 54, 0.2)'
  );
  document.documentElement.style.setProperty('--even-bg', '#FCFCFC');
  document.documentElement.style.setProperty('--main-icon', '#7A7A7A');
  document.documentElement.style.setProperty('--popup-light-icon-bg', '#FFF');
  document.documentElement.style.setProperty('--popup-dark-icon-bg', '#252525');
  document.documentElement.style.setProperty('--popup-btn-bg', '#f1f1f1');
};

const changeDark = () => {
  myStorage.setItem('setMode', 'dark');
  document.documentElement.style.setProperty('--main-bg', '#333');
  document.documentElement.style.setProperty('--sub-bg', '#404040');
  document.documentElement.style.setProperty('--main-text', '#fcfcfc');
  document.documentElement.style.setProperty('--sub-text', '#FCFCFC');
  document.documentElement.style.setProperty(
    '--sel-high-bg',
    'rgba(180, 180, 180, 0.2)'
  );
  document.documentElement.style.setProperty('--even-bg', '#4D4D4D');
  document.documentElement.style.setProperty('--main-icon', '#FCFCFC');
  document.documentElement.style.setProperty('--popup-light-icon-bg', '#252525');
  document.documentElement.style.setProperty('--popup-dark-icon-bg', '#FFF');
  document.documentElement.style.setProperty('--popup-btn-bg', '#4F4F4F');
};

export default popupHandler;
