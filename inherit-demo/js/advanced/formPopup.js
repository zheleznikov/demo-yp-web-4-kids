import { Popup } from "./popup.js";

export class FormPopup extends Popup {

    form = document.getElementById("form");
    nameInput = document.getElementById("inputName");
    phoneInput = document.getElementById("inputPhone");
    messageTextarea = document.getElementById("textMessage");

    constructor(popup, button) {
        super(popup, button);
       

        this.initFormHandle();
    }

    handleForm(event) {
        event.preventDefault();
        
        console.log(this.nameInput.value);
        console.log(this.phoneInput.value);
        console.log(this.messageTextarea.value);
    }

    initFormHandle() {
        this.form.addEventListener('submit', (event) => {
            this.handleForm(event);
        })

    }

}