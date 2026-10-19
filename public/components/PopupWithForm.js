import { Popup } from "./Popup.js";
import {} from "../types/types.js";
export class PopupWithForm extends Popup {
    constructor(selector, handleFormSubmit) {
        super(selector);
        this.handleFormSubmit = handleFormSubmit;
        this.formElement = this.selector.querySelector(".popup__form");
        this.inputList =
            this.formElement.querySelectorAll(".popup__input");
    }
    getInputValues() {
        const formValues = {};
        this.inputList.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this.getInputValues());
        });
    }
    open(data) {
        if (data) {
            this.inputList.forEach((input) => {
                input.value = data[input.name];
            });
        }
        super.open();
    }
    close() {
        super.close();
        this.formElement.reset();
    }
}
