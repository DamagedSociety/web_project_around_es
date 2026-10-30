import { Popup } from "./Popup.js";
import { type FormValues } from "../types/types.js";

export class PopupWithForm extends Popup {
  private handleFormSubmit: (data: FormValues) => void;
  private inputList: NodeListOf<HTMLInputElement>;
  private formElement: HTMLFormElement;
  private submitButton: HTMLButtonElement;
  private submitButtonText: string;

  constructor(selector: string, handleFormSubmit: (data: FormValues) => void) {
    super(selector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement = this.selector.querySelector(
      ".popup__form",
    ) as HTMLFormElement;
    this.inputList =
      this.formElement.querySelectorAll<HTMLInputElement>(".popup__input");

    // 1. Guardamos una referencia al botón de envío y su texto original
    this.submitButton = this.formElement.querySelector(
      ".popup__button",
    ) as HTMLButtonElement;
    this.submitButtonText = this.submitButton.textContent || "Guardar";
  }

  private getInputValues(): FormValues {
    const formValues: FormValues = {};
    this.inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  public renderLoading(
    isLoading: boolean,
    loadingText: string = "Guardando...",
  ): void {
    if (isLoading) {
      this.submitButton.textContent = loadingText;
    } else {
      this.submitButton.textContent = this.submitButtonText;
    }
  }

  setEventListeners(): void {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt: SubmitEvent) => {
      evt.preventDefault();
      this.handleFormSubmit(this.getInputValues());
    });
  }

  open(data?: FormValues): void {
    if (data) {
      this.inputList.forEach((input) => {
        input.value = data[input.name];
      });
    }
    super.open();
  }

  close(): void {
    super.close();
    this.formElement.reset();
  }
}
