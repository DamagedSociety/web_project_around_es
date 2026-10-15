import {
  initialCards,
  cardContainer,
  cardTemplate,
  editProfileModal,
  newCardModal,
  imgModal,
  userInfo,
  defaultFormConfig,
} from "./utils/constants.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { type CardData } from "./types/types.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { FormValidator } from "./components/FormValidator.js";

const imagePopup = new PopupWithImage(imgModal);
imagePopup.setEventListeners();

const handleCardClick = (data: CardData): void => {
  imagePopup.open(data);
};

const createCard = (cardData: CardData): HTMLElement => {
  const card = new Card(cardData, cardTemplate, handleCardClick);
  return card.generateCard();
};

const cardList = new Section<CardData>(
  {
    data: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  cardContainer,
);

cardList.renderItems();

const profileTitle = document.querySelector(
  userInfo.userNameSelector,
) as HTMLElement;
const profileDescription = document.querySelector(
  userInfo.userDescriptionSelector,
) as HTMLElement;

const openEditFormButton = document.querySelector(
  ".profile__edit-button",
) as HTMLButtonElement;
const openCardFormButton = document.querySelector(
  ".profile__add-button",
) as HTMLButtonElement;

const profileForm = document.querySelector(
  "#edit-profile-form",
) as HTMLFormElement;
const cardForm = document.querySelector("#new-card-form") as HTMLFormElement;

const editProfilePopup = new PopupWithForm(editProfileModal, (formData) => {
  if (profileTitle && profileDescription) {
    profileTitle.textContent = formData.name;
    profileDescription.textContent = formData.about;
  }
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(newCardModal, (formData) => {
  const newCardElement = createCard({
    name: formData.name,
    link: formData.link,
  });
  cardList.addItem(newCardElement);
  addCardPopup.close();
});
addCardPopup.setEventListeners();

const profileFormValidator = new FormValidator(defaultFormConfig, profileForm);
const cardFormValidator = new FormValidator(defaultFormConfig, cardForm);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();

if (openEditFormButton) {
  openEditFormButton.addEventListener("click", () => {
    profileFormValidator.resetValidation();
    editProfilePopup.open();
  });
}

if (openCardFormButton) {
  openCardFormButton.addEventListener("click", () => {
    cardFormValidator.resetValidation();
    addCardPopup.open();
  });
}
