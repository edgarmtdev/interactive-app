'use strict'
import View from "../view.js";

export default class AddElement {
     constructor() {     
          this.view = new View()
     }

     onClick(callback) {
          this.view.btn.onclick = () => {
               const newDiv = document.createElement('p')
               newDiv.innerText = 'Hello World'
               this.view.hello.appendChild(newDiv)
               callback(newDiv)
          }
     }
}