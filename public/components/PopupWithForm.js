import { Popup } from "./Popup.js";
import {} from "../types/types.js";
export class PopupWithForm extends Popup {
    constructor(selector, handleFormSubmit) {
        super(selector);
        this.handleFormSubmit = handleFormSubmit;
        this.formElement = this.selector.querySelector(".popup__form");
        this.inputList =
            this.formElement.querySelectorAll(".popup__input");
        // 1. Guardamos una referencia al botón de envío y su texto original
        this.submitButton = this.formElement.querySelector(".popup__button");
        this.submitButtonText = this.submitButton.textContent || "Guardar";
    }
    getInputValues() {
        const formValues = {};
        this.inputList.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }
    renderLoading(isLoading, loadingText = "Guardando...") {
        if (isLoading) {
            this.submitButton.textContent = loadingText;
        }
        else {
            this.submitButton.textContent = this.submitButtonText;
        }
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
