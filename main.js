import './style.css';
import { setData } from './counter.js';

setData(
  document.querySelector('#main'),
  document.querySelector('#btn'),
  document.querySelector('input'),
  document.querySelector('#remove')
);
