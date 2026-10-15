import type { FormValidatorConfig } from "../types/types.js";

export class FormValidator {
  private config: FormValidatorConfig;
  private formElement: HTMLFormElement;
  private inputList: HTMLInputElement[];
  private submitButton: HTMLButtonElement;

  constructor(config: FormValidatorConfig, formElement: HTMLFormElement) {
    this.config = config;
    this.formElement = formElement;
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.config.inputSelector),
    ) as HTMLInputElement[];
    this.submitButton = this.formElement.querySelector(
      this.config.submitButtonSelector,
    ) as HTMLButtonElement;
  }

  private showInputError(
    element: HTMLInputElement,
    errorMessage: string,
  ): void {
    const errorElement = this.formElement.querySelector(
      `.${element.id}-input-error`,
    ) as HTMLElement;
    element.classList.add(this.config.inputErrorClass);
    errorElement!.textContent = errorMessage;
    errorElement!.classList.add(this.config.errorClass);
  }

  private hideInputError(element: HTMLInputElement): void {
    const errorElement = this.formElement.querySelector(
      `.${element.id}-input-error`,
    ) as HTMLElement;
    element.classList.remove(this.config.inputErrorClass);
    errorElement!.classList.remove(this.config.errorClass);
    errorElement!.textContent = "";
  }

  private checkInputValidity(element: HTMLInputElement): void {
    if (!element.validity.valid) {
      this.showInputError(element, element.validationMessage);
    } else {
      this.hideInputError(element);
    }
  }

  private hasInvalidInput(): boolean {
    return this.inputList.some((input) => !input.validity.valid);
  }
  private toggleButtonState(): void {
    if (this.hasInvalidInput()) {
      this.submitButton.classList.add(this.config.inactiveButtonClass);
      this.submitButton.disabled = true;
    } else {
      this.submitButton.classList.remove(this.config.inactiveButtonClass);
      this.submitButton.disabled = false;
    }
  }

  private setEventListeners(): void {
    this.toggleButtonState();

    this.inputList.forEach((element) => {
      element.addEventListener("input", () => {
        this.checkInputValidity(element);
        this.toggleButtonState();
      });
    });
  }

  public enableValidation(): void {
    this.setEventListeners();
  }

  public resetValidation(): void {
    this.inputList.forEach((element) => {
      this.hideInputError(element);
    });
    this.toggleButtonState();
  }
}
