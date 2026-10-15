import { Popup } from "./Popup.js";
import { type CardData } from "../types/types.js";

export class PopupWithImage extends Popup {
  private image: HTMLImageElement;
  private text: HTMLElement;

  constructor(selector: string) {
    super(selector);

    this.image = this.selector.querySelector(
      ".popup__image",
    ) as HTMLImageElement;
    this.text = this.selector.querySelector(".popup__caption") as HTMLElement;
  }

  open(data?: CardData): void {
    if (data) {
      this.text.textContent = data.name;
      this.image.src = data.link;
      this.image.alt = data.name;
    }
    super.open();
  }
}
