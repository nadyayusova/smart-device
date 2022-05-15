import {iosVhFix} from './utils/ios-vh-fix';
import {initModal} from './modules/modal';
import {initText, initButton} from './modules/about';
import {initAccordion} from './modules/accordion';
import {initForm} from './modules/local-storage';
import {initPlaceholder} from './modules/place-holder';
import {initMask} from './modules/tel-mask';


window.addEventListener('DOMContentLoaded', () => {

  // Utils

  iosVhFix();

  // Modules

  initText();
  initButton();

  window.addEventListener('load', () => {
    initForm();
    initAccordion();
    initPlaceholder();
    initMask();
    initModal();
  });
});
