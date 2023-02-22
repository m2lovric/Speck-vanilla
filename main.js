import './style.css';
import { setData } from './data.js';

setData(
  document.querySelector('#main'),
  document.querySelector('#btn'),
  document.querySelector('input'),
  document.querySelector('#remove')
);
