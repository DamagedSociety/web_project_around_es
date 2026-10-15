export class Popup {
  protected selector: HTMLElement;

  constructor(selector: string) {
    this.selector = document.querySelector(selector) as HTMLElement;
  }

  private handleEscClose = (evt: KeyboardEvent): void => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  public setEventListeners(): void {
    const closeButton = this.selector.querySelector(".popup__close");

    if (closeButton) {
      closeButton.addEventListener("click", () => {
        this.close();
      });
    }

    this.selector.addEventListener("click", (evt: MouseEvent) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }

  public open(): void {
    this.selector.classList.add("popup_is-opened");
    document.addEventListener("keyup", this.handleEscClose);
  }

  public close(): void {
    this.selector.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this.handleEscClose);
  }
}
