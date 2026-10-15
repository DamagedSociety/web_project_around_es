export class FormValidator {
    constructor(config, formElement) {
        this.config = config;
        this.formElement = formElement;
        this.inputList = Array.from(this.formElement.querySelectorAll(this.config.inputSelector));
        this.submitButton = this.formElement.querySelector(this.config.submitButtonSelector);
    }
    showInputError(element, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${element.id}-input-error`);
        element.classList.add(this.config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.config.errorClass);
    }
    hideInputError(element) {
        const errorElement = this.formElement.querySelector(`.${element.id}-input-error`);
        element.classList.remove(this.config.inputErrorClass);
        errorElement.classList.remove(this.config.errorClass);
        errorElement.textContent = "";
    }
    checkInputValidity(element) {
        if (!element.validity.valid) {
            this.showInputError(element, element.validationMessage);
        }
        else {
            this.hideInputError(element);
        }
    }
    hasInvalidInput() {
        return this.inputList.some((input) => !input.validity.valid);
    }
    toggleButtonState() {
        if (this.hasInvalidInput()) {
            this.submitButton.classList.add(this.config.inactiveButtonClass);
            this.submitButton.disabled = true;
        }
        else {
            this.submitButton.classList.remove(this.config.inactiveButtonClass);
            this.submitButton.disabled = false;
        }
    }
    setEventListeners() {
        this.toggleButtonState();
        this.inputList.forEach((element) => {
            element.addEventListener("input", () => {
                this.checkInputValidity(element);
                this.toggleButtonState();
            });
        });
    }
    enableValidation() {
        this.setEventListeners();
    }
    resetValidation() {
        this.inputList.forEach((element) => {
            this.hideInputError(element);
        });
        this.toggleButtonState();
    }
}
