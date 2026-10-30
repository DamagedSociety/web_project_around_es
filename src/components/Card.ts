import { type ApiCard } from "../types/types.js";

export class Card {
  private name: string;
  private link: string;
  private selector: string;
  private element!: HTMLElement;
  private handleCardClick: (cardData: { name: string; link: string }) => void;
  private id: string;
  private isLiked: boolean;
  private handleLikeClick: (cardId: string, isLiked: boolean) => void;
  private handleTrashClick: (cardId: string) => void;

  constructor(
    { name, link, _id, isLiked }: ApiCard,
    selector: string,
    handleCardClick: (cardData: { name: string; link: string }) => void,
    handleLikeClick: (cardId: string, isLiked: boolean) => void,
    handleTrashClick: (cardId: string) => void,
  ) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
    this.id = _id;
    this.isLiked = isLiked;
    this.handleLikeClick = handleLikeClick;
    this.handleTrashClick = handleTrashClick;
  }

  private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;
    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    return cardElement;
  }

  public setLikeState(isLiked: boolean): void {
    this.isLiked = isLiked;
    const cardLikeBtn = this.element.querySelector(
      ".card__like-button",
    ) as HTMLElement;

    if (this.isLiked) {
      cardLikeBtn.classList.add("card__like-button_is-active");
    } else {
      cardLikeBtn.classList.remove("card__like-button_is-active");
    }
  }

  public removeCard(): void {
    this.element.remove();
  }

  private setEventListeners(): void {
    const cardLikeBtn = this.element.querySelector(
      ".card__like-button",
    ) as HTMLElement;
    cardLikeBtn.addEventListener("click", () => {
      this.handleLikeClick(this.id, this.isLiked);
    });

    const removeCardBtn = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLElement;
    removeCardBtn.addEventListener("click", () => {
      this.handleTrashClick(this.id);
    });

    const imageElement = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;

    imageElement.addEventListener("click", () => {
      this.handleCardClick({ name: this.name, link: this.link });
    });
  }

  public generateCard(): HTMLElement {
    this.element = this.getTemplate();
    this.setEventListeners();

    const imageElement = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    imageElement.src = this.link;
    imageElement.alt = this.name;

    const nameElement = this.element.querySelector(
      ".card__title",
    ) as HTMLElement;
    nameElement.textContent = this.name;

    const cardLikeBtn = this.element.querySelector(
      ".card__like-button",
    ) as HTMLElement;
    if (this.isLiked) {
      cardLikeBtn.classList.add("card__like-button_is-active");
    }

    return this.element;
  }
}
