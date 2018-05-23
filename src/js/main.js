/**
 * main.js
 * Entrypoint for webpack
 */
import ready from './utils/ready';
import registerServiceWorker from './utils/serviceWorker';
import { info } from './utils/debug';

function onReady(e) {
  registerServiceWorker();
  info(`Event: ${e.type}`, `Datestamp: ${this.date}`);
  console.log('service workder ready');

  
  const title = document.getElementById('title');
  const handle = document.querySelector('.handle');

  handle.addEventListener('click', () => {
    console.log('hello');
    title.classList.add('bounce', 'inifinite');
  });
}

ready(onReady, {
  date: new Date(),
});
