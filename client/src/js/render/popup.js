import {
  controllers
} from "chart.js";

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
  } else {
    if ( darkmode === 'light') {
      changeLight();
    } else {
      changeDark();
    }
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

    if(darkmode === 'light') changeDark();

    if(darkmode === 'dark') changeLight();
  };
};

const changeLight = () => {
  myStorage.setItem('setMode', 'light');
  document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
  document.documentElement.style.setProperty('--popup-bg-color', '#FFFFFF');
  document.documentElement.style.setProperty('--popup-btn-color', '#F1F1F1');
  document.documentElement.style.setProperty('--popup-lightSpan-color', '#000000');
  document.documentElement.style.setProperty('--popup-darkSpan-color', '#000000');
  document.documentElement.style.setProperty('--popup-closeBtn-color', '#000000');
  document.documentElement.style.setProperty('--header-icon-color', '#7A7A7A');
  document.documentElement.style.setProperty('--infection-odd-color', '#FCFCFC');
  document.documentElement.style.setProperty('--infection-even-color', '#F1F1F1');
  document.documentElement.style.setProperty('--infection-font-color', '#616161');
};

const changeDark = () => {
  myStorage.setItem('setMode', 'dark');
  document.documentElement.style.setProperty('--bg-color', '#333333');
  document.documentElement.style.setProperty('--popup-bg-color', '#333333');
  document.documentElement.style.setProperty('--popup-btn-color', '#4F4F4F');
  document.documentElement.style.setProperty('--popup-lightSpan-color', '#FFFFFF');
  document.documentElement.style.setProperty('--popup-darkSpan-color', '#FFFFFF');
  document.documentElement.style.setProperty('--popup-closeBtn-color', '#FFFFFF');
  document.documentElement.style.setProperty('--header-icon-color', '#FCFCFC');
  document.documentElement.style.setProperty('$main-light', '#FFFFFF');
  document.documentElement.style.setProperty('--infection-odd-color', '#404040');
  document.documentElement.style.setProperty('--infection-even-color', '#4D4D4D');
  document.documentElement.style.setProperty('--infection-font-color', '#FFFFFF');
};

export default popupHandler;