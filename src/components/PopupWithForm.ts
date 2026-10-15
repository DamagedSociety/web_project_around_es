import { Popup } from "./Popup.js";
import { type FormValues } from "../types/types.js";

export class PopupWithForm extends Popup {
  private handleFormSubmit: (data: FormValues) => void;
  private inputList: NodeListOf<HTMLInputElement>;
  private formElement: HTMLFormElement;

  constructor(selector: string, handleFormSubmit: (data: FormValues) => void) {
    super(selector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement = this.selector.querySelector(
      ".popup__form",
    ) as HTMLFormElement;
    this.inputList =
      this.formElement.querySelectorAll<HTMLInputElement>(".popup__input");
  }

  private getInputValues(): FormValues {
    const formValues: FormValues = {};
    this.inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners(): void {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt: SubmitEvent) => {
      evt.preventDefault();
      this.handleFormSubmit(this.getInputValues());
    });
  }

  close(): void {
    super.close();
    this.formElement.reset();
  }
}
