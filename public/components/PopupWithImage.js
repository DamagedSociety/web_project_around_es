import { Popup } from "./Popup.js";
import {} from "../types/types.js";
export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this.image = this.selector.querySelector(".popup__image");
        this.text = this.selector.querySelector(".popup__caption");
    }
    open(data) {
        if (data) {
            this.text.textContent = data.name;
            this.image.src = data.link;
            this.image.alt = data.name;
        }
        super.open();
    }
}
