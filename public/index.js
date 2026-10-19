import { initialCards, cardContainer, cardTemplate, editProfileModal, newCardModal, imgModal, userInfoConfig, defaultFormConfig, } from "./utils/constants.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { FormValidator } from "./components/FormValidator.js";
import { UserInfo } from "./components/UserInfo.js";
const imagePopup = new PopupWithImage(imgModal);
imagePopup.setEventListeners();
const handleCardClick = (data) => {
    imagePopup.open(data);
};
const createCard = (cardData) => {
    const card = new Card(cardData, cardTemplate, handleCardClick);
    return card.generateCard();
};
const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item));
    },
}, cardContainer);
cardList.renderItems();
const userInfo = new UserInfo({
    userNameSelector: userInfoConfig.userNameSelector,
    userDescriptionSelector: userInfoConfig.userDescriptionSelector,
});
const openEditFormButton = document.querySelector(".profile__edit-button");
const openCardFormButton = document.querySelector(".profile__add-button");
const profileForm = document.querySelector("#edit-profile-form");
const cardForm = document.querySelector("#new-card-form");
const editProfilePopup = new PopupWithForm(editProfileModal, (formData) => {
    userInfo.setUser({
        name: formData.name,
        about: formData.about,
    });
    editProfilePopup.close();
});
editProfilePopup.setEventListeners();
const addCardPopup = new PopupWithForm(newCardModal, (formData) => {
    const newCardElement = createCard({
        name: formData.title,
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
        const data = userInfo.getUserInfo();
        editProfilePopup.open({
            name: data.name,
            about: data.about,
        });
    });
}
if (openCardFormButton) {
    openCardFormButton.addEventListener("click", () => {
        cardFormValidator.resetValidation();
        addCardPopup.open();
    });
}
