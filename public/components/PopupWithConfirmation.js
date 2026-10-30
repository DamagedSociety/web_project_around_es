import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    constructor(selector) {
        super(selector);
        this.formElement = this.selector.querySelector(".popup__form");
        this.submitButton = this.formElement.querySelector(".popup__button");
        this.defaultSubmitButtonText = this.submitButton.textContent || "Sí";
    }
    setAction(action) {
        this.handleFormSubmit = action;
    }
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            if (this.handleFormSubmit) {
                this.handleFormSubmit();
            }
        });
    }
    renderLoading(isLoading, loadingText = "Eliminando...") {
        if (isLoading) {
            this.submitButton.textContent = loadingText;
        }
        else {
            this.submitButton.textContent = this.defaultSubmitButtonText;
        }
    }
}
