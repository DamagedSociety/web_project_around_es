import { type CardData } from "../types/types.js";

export class Card {
  private name: string;
  private link: string;
  private selector: string;
  private element!: HTMLElement;
  private handleCardClick: (cardData: CardData) => void;

  constructor(
    { name, link }: CardData,
    selector: string,
    handleCardClick: (cardData: CardData) => void,
  ) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
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

  private handleLikeClick = (cardLikeBtn: HTMLElement): void => {
    cardLikeBtn.classList.toggle("card__like-button_is-active");
  };

  private handleRemoveClick = (): void => {
    this.element.remove();
  };

  private setEventListeners(): void {
    const cardLikeBtn = this.element.querySelector(
      ".card__like-button",
    ) as HTMLElement;
    cardLikeBtn.addEventListener("click", () => {
      this.handleLikeClick(cardLikeBtn);
    });

    const removeCardBtn = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLElement;
    removeCardBtn.addEventListener("click", () => {
      this.handleRemoveClick();
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

    return this.element;
  }
}
