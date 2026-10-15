import {} from "../types/types.js";
export class Card {
    constructor({ name, link }, selector, handleCardClick) {
        this.handleLikeClick = (cardLikeBtn) => {
            cardLikeBtn.classList.toggle("card__like-button_is-active");
        };
        this.handleRemoveClick = () => {
            this.element.remove();
        };
        this.name = name;
        this.link = link;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.selector);
        const cardElement = cardTemplate.content
            .querySelector(".card")
            .cloneNode(true);
        return cardElement;
    }
    setEventListeners() {
        const cardLikeBtn = this.element.querySelector(".card__like-button");
        cardLikeBtn.addEventListener("click", () => {
            this.handleLikeClick(cardLikeBtn);
        });
        const removeCardBtn = this.element.querySelector(".card__delete-button");
        removeCardBtn.addEventListener("click", () => {
            this.handleRemoveClick();
        });
        const imageElement = this.element.querySelector(".card__image");
        imageElement.addEventListener("click", () => {
            this.handleCardClick({ name: this.name, link: this.link });
        });
    }
    generateCard() {
        this.element = this.getTemplate();
        this.setEventListeners();
        const imageElement = this.element.querySelector(".card__image");
        imageElement.src = this.link;
        imageElement.alt = this.name;
        const nameElement = this.element.querySelector(".card__title");
        nameElement.textContent = this.name;
        return this.element;
    }
}
