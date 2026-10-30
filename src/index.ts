import {
  cardContainer,
  cardTemplate,
  editProfileModal,
  newCardModal,
  imgModal,
  userInfoConfig,
  defaultFormConfig,
  confirmationModal,
} from "./utils/constants.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import type { CardData, ApiCard, ApiUserInfo } from "./types/types.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithConfirmation } from "./components/PopupWithConfirmation.js";
import { FormValidator } from "./components/FormValidator.js";
import { UserInfo } from "./components/UserInfo.js";
import { Api } from "./components/Api.js";

const tripleTenApi = new Api(
  "https://around-api.es.tripleten-services.com/v1",
  "ec9dea6d-5e75-48f3-b05a-2d10301b18d4",
);

const userInfo = new UserInfo(userInfoConfig);

const imagePopup = new PopupWithImage(imgModal);
imagePopup.setEventListeners();

const confirmPopup = new PopupWithConfirmation(confirmationModal);
confirmPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(
  editProfileModal,
  async (formData) => {
    try {
      editProfilePopup.renderLoading(true, "Guardando...");
      const res = await tripleTenApi.patchUser({
        name: formData.name,
        about: formData.about,
      });

      userInfo.setUser({
        name: res.name,
        about: res.about,
      });

      editProfilePopup.close();
    } catch (err) {
      console.error("Error al actualizar el perfil:", err);
    } finally {
      editProfilePopup.renderLoading(false);
    }
  },
);
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(newCardModal, async (formData) => {
  try {
    addCardPopup.renderLoading(true);
    const newCardData = await tripleTenApi.addCard({
      name: formData.title,
      link: formData.link,
    });
    const newCardElement = createCard(newCardData);

    cardList.addItem(newCardElement);
    addCardPopup.close();
  } catch (err) {
    console.error("Error al crear la tarjeta", err);
  } finally {
    addCardPopup.renderLoading(false);
  }
});
addCardPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm(
  "#edit-avatar-popup",
  async (formData) => {
    try {
      editAvatarPopup.renderLoading(true, "Guardando...");
      const userData = await tripleTenApi.updateAvatar(formData.avatar);
      userInfo.setUser(userData);
      editAvatarPopup.close();
    } catch (err) {
      console.error("Error al actualizar avatar:", err);
    } finally {
      editAvatarPopup.renderLoading(false);
    }
  },
);
editAvatarPopup.setEventListeners();

const openEditFormButton = document.querySelector(
  ".profile__edit-button",
) as HTMLButtonElement;

const openCardFormButton = document.querySelector(
  ".profile__add-button",
) as HTMLButtonElement;

const openAvatarFormButton = document.querySelector(
  ".profile__avatar-container",
) as HTMLElement;

const profileForm = document.querySelector(
  "#edit-profile-form",
) as HTMLFormElement;

const cardForm = document.querySelector("#new-card-form") as HTMLFormElement;

const avatarForm = document.querySelector(
  "#edit-avatar-form",
) as HTMLFormElement;

const handleCardClick = (data: CardData): void => {
  imagePopup.open(data);
};

const createCard = (cardData: ApiCard): HTMLElement => {
  const card = new Card(
    cardData,
    cardTemplate,
    handleCardClick,
    async (cardId, isLiked) => {
      try {
        const updatedCard = isLiked
          ? await tripleTenApi.removeLike(cardId)
          : await tripleTenApi.addLike(cardId);
        card.setLikeState(updatedCard.isLiked);
      } catch (err) {
        console.error("Error al actualizar el like:", err);
      }
    },
    (cardId: string) => {
      confirmPopup.open();

      confirmPopup.setAction(async () => {
        try {
          confirmPopup.renderLoading(true, "Eliminando...");
          await tripleTenApi.deleteCard(cardId);
          card.removeCard();
          confirmPopup.close();
        } catch (err) {
          console.error("Error al eliminar la tarjeta:", err);
        } finally {
          confirmPopup.renderLoading(false);
        }
      });
    },
  );

  return card.generateCard();
};

const profileFormValidator = new FormValidator(defaultFormConfig, profileForm);
const cardFormValidator = new FormValidator(defaultFormConfig, cardForm);
const avatarFormValidator = new FormValidator(defaultFormConfig, avatarForm);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

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

if (openAvatarFormButton) {
  openAvatarFormButton.addEventListener("click", () => {
    avatarFormValidator.resetValidation();
    editAvatarPopup.open();
  });
}

let cardList: Section<ApiCard>;
let userData: ApiUserInfo;
let initialCards: ApiCard[];

(async () => {
  try {
    [userData, initialCards] = await Promise.all([
      tripleTenApi.getUser(),
      tripleTenApi.getCards(),
    ]);

    userInfo.setUser(userData);

    cardList = new Section<ApiCard>(
      {
        data: initialCards.reverse(),
        renderer: (item) => {
          cardList.addItem(createCard(item));
        },
      },
      cardContainer,
    );

    cardList.renderItems();
  } catch (err) {
    console.error("Fallo al cargar datos iniciales:", err);
  }
})();
