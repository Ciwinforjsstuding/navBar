import { navBar } from './navBar/navBar.js';

import './navBar/styles.css';

window.n = new navBar("#nav-bar", [
  {id: 1, text: "Текст в элементе-1"},
  {id: 2, text: "Текст в элементе-2"},
  {id: 3, text: "Текст в элементе-3"},
  {id: 4, text: "Под текст", parentId: 3},
  {id: 5, text: "Текст", parentId: 3},
  {id: 6, text: "Текст текст", parentId: 3},
  {id: 7, text: "Fuck", parentId: 3},
  {id: 7, text: "Fuck", parentId: 2},
  {id: 7, text: "Fuck", parentId: 2},

]);
// import name from './navBar/';