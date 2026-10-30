import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  private formElement: HTMLFormElement;
  private handleFormSubmit!: () => void;
  private submitButton: HTMLButtonElement;
  private defaultSubmitButtonText: string;

  constructor(selector: string) {
    super(selector);
    this.formElement = this.selector.querySelector(
      ".popup__form",
    ) as HTMLFormElement;
    this.submitButton = this.formElement.querySelector(
      ".popup__button",
    ) as HTMLButtonElement;
    this.defaultSubmitButtonText = this.submitButton.textContent || "Sí";
  }

  public setAction(action: () => void): void {
    this.handleFormSubmit = action;
  }

  setEventListeners(): void {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt: SubmitEvent) => {
      evt.preventDefault();
      if (this.handleFormSubmit) {
        this.handleFormSubmit();
      }
    });
  }

  public renderLoading(
    isLoading: boolean,
    loadingText: string = "Eliminando...",
  ): void {
    if (isLoading) {
      this.submitButton.textContent = loadingText;
    } else {
      this.submitButton.textContent = this.defaultSubmitButtonText;
    }
  }
}
