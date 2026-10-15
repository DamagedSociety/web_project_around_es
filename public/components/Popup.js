export class Popup {
    constructor(selector) {
        this.handleEscClose = (evt) => {
            if (evt.key === "Escape") {
                this.close();
            }
        };
        this.selector = document.querySelector(selector);
    }
    setEventListeners() {
        const closeButton = this.selector.querySelector(".popup__close");
        if (closeButton) {
            closeButton.addEventListener("click", () => {
                this.close();
            });
        }
        this.selector.addEventListener("click", (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        });
    }
    open() {
        this.selector.classList.add("popup_is-opened");
        document.addEventListener("keyup", this.handleEscClose);
    }
    close() {
        this.selector.classList.remove("popup_is-opened");
        document.removeEventListener("keyup", this.handleEscClose);
    }
}
