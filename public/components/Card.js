import {} from "../types/types.js";
export class Card {
    constructor({ name, link, _id, isLiked }, selector, handleCardClick, handleLikeClick, handleTrashClick) {
        this.name = name;
        this.link = link;
        this.selector = selector;
        this.handleCardClick = handleCardClick;
        this.id = _id;
        this.isLiked = isLiked;
        this.handleLikeClick = handleLikeClick;
        this.handleTrashClick = handleTrashClick;
    }
    getTemplate() {
        const cardTemplate = document.querySelector(this.selector);
        const cardElement = cardTemplate.content
            .querySelector(".card")
            .cloneNode(true);
        return cardElement;
    }
    setLikeState(isLiked) {
        this.isLiked = isLiked;
        const cardLikeBtn = this.element.querySelector(".card__like-button");
        if (this.isLiked) {
            cardLikeBtn.classList.add("card__like-button_is-active");
        }
        else {
            cardLikeBtn.classList.remove("card__like-button_is-active");
        }
    }
    removeCard() {
        this.element.remove();
    }
    setEventListeners() {
        const cardLikeBtn = this.element.querySelector(".card__like-button");
        cardLikeBtn.addEventListener("click", () => {
            this.handleLikeClick(this.id, this.isLiked);
        });
        const removeCardBtn = this.element.querySelector(".card__delete-button");
        removeCardBtn.addEventListener("click", () => {
            this.handleTrashClick(this.id);
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
        const cardLikeBtn = this.element.querySelector(".card__like-button");
        if (this.isLiked) {
            cardLikeBtn.classList.add("card__like-button_is-active");
        }
        return this.element;
    }
}
